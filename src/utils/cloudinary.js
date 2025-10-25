import { v2 as cod } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: 'dhr1lsc8m',
  api_key: '278165271996532y',
  api_secret: 'MsEYMFVsi9stsG8QjlCeKMFIQwY'
});

const cloudUpload = async (filePath) => {
  if(!filePath) return ;
  try {
    const resultUpload = await cod.uploader.upload(filePath)
    console.log("uploaded", resultUpload.url);
    fs.unlinkSync(filePath);
    return resultUpload;
  } catch (error) {
    fs.unlinkSync(filePath);
    return error;
  }

}

export default cloudUpload ;