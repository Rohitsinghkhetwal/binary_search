const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "Pages");
        },
        filename: (req, file, callback) => {
            callback(null, file.fieldname + "-" + Date.now() + ".jpg")

        }
    })
}).single("user_file")

app.post('/upload',upload, (req, resp) => {
    resp.send("file uploaded")
})

app.listen(5000)