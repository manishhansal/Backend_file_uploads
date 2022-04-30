const express = require('express');
const multer = require('multer');
const app = express();
const userController = require('../Controllers/user');
app.use(express.json());

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(__dirname);
        cb(null, `${__dirname}/public`)
    },
    filename: function (req, file, cb) {
        console.log(file);
        const ext = file.mimetype.split("/")[1];
        //jpeg
        if (ext != 'jpeg') { cb(new Error("format not accept")) }
        cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
    }
})

const upload = multer({
    storage: diskStorage
});

app.post('/book', userController.createUser);
app.get('/books', userController.getAllUsers)
app.delete('/book/:userId', userController.deleteUser);

app.post('/saveImage', upload.single('file'), userController.saveImage)


module.exports = app;