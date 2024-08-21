import multer from 'multer';
import  fs from 'fs';
import path from 'path';

class UploadMiddleware{
    folder_exists(folder){
        const path = `public/${folder}`;
        if (!fs.existsSync(path)){
            fs.mkdirSync(path);
            return true;
        }
        return false;
    }

    upload(destination) {
        this.folder_exists(destination);
        this.storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${destination}`);
            },
            filename: function (req, file, cb) {
                let fileName = file.originalname.trim();
                let imageName = Date.now() + '-' + Math.round(Math.random() * 1E9) + "-" + fileName;
                cb(null, imageName)
            }
        });
        const fileFilter = (req, file, cb) => {
            const filetypes = /jpeg|jpg|png|gif/;
            const mimetype = filetypes.test(file.mimetype);
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb(new Error('Invalid file type. Only JPEG, JPG, PNG, and GIF files are allowed!'));
            }
        };
        return multer({
            storage: this.storage,
            fileFilter: fileFilter,
            limits: { fileSize: 10 * 1024 * 1024 } // Optional: Limit the file size to 10MB
        });
    }

}

export default UploadMiddleware;