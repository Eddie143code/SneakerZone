/* import multer from "multer";

const imageFilter = (req : any, file : any, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;

*/
