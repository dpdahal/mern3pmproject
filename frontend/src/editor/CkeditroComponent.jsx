import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";


function CkeditroComponent({handleChange, ...props}) {
       function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const sendData = new FormData();
                    loader.file.then((file) => {
                        console.log(file);
                        sendData.append("image", file);
                        const API_URL = "http://127.0.0.1:5000/ckeditor";
                        axios.post(`${API_URL}`, sendData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        })
                            .then((res) => {
                                console.log(res);
                                resolve({
                                    default: res.data.filePath
                                });
                            })
                            .then((res) => {
                                resolve({
                                    default: `${API_URL}/${res.filename}`
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                });
            }
        };
    }

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

    return (
        <div>
            <CKEditor
                activeClass="editor"

                config={{
                    extraPlugins: [uploadPlugin]
                }}
                editor={ClassicEditor}
                onReady={(editor) => {
                }}
                onBlur={(event, editor) => {
                }}
                onFocus={(event, editor) => {
                }}
                onChange={(event, editor) => {
                    handleChange(editor.getData());
                }}
                {...props}
            />
        </div>
    );
}

export default CkeditroComponent;