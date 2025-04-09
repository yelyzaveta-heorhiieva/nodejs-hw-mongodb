import { getEnvVar } from "./getEnvVar.js";
import { saveFileToCloudinary } from "./saveFileToCloudinary.js";
import { saveFileToUploadDir } from "./saveFileToUploadDir.js";

export const addPhoto = async (payload) => {
  const photo = payload.file;
  let photoUrl;

  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }

    return {photo: photoUrl}
};

