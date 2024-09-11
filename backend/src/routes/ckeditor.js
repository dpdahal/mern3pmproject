import multer from 'multer';
import fs from 'fs';
import express from "express";

class UploadMiddleware {
    constructor() {
        this.storage = null;
    }

    folder_exists(folder) {
        const path = `public/${folder}`;
        if (!fs.existsSync(path)) {
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
        return multer({ storage: this.storage });
    }
}

const uploadInstance = new UploadMiddleware();
const upI = uploadInstance.upload("ckeditor");

const ckEditorRoute = express.Router();

ckEditorRoute.get("/:id", (req, res) => {
    let imageName = req.params.id; // Assuming ID is the image name
    let filePath = process.env.APP_URL + "/ckeditor/" + imageName;
    res.json({ filename: imageName, filePath: filePath });
});

ckEditorRoute.post("/", upI.single('image'), (req, res) => {
    let imageName = req.file.filename;
    let filePath = process.env.APP_URL + "/ckeditor/" + imageName;
    res.json({ filename: imageName, filePath: filePath });
});

export default ckEditorRoute;
