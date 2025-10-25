import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")},
  filename: function (req, file, cb) {
    cb(null,file.originalname); // rename file
  }
});
export const upload = multer({
     storage: storage //only storage will work if name is same for key : value for ES6
})