const fsProm = require('fs/promises');
const path = require('path');
const sourceFolderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files-copy');

async function copyDir() {
    const deleteIfThere = await fsProm.rm(newFolderPath, {recursive: true, force: true});
    const newFolder = await fsProm.mkdir(newFolderPath,  { recursive: true });
    const whatInsideSourceFolder = await fsProm.readdir(sourceFolderPath);

    whatInsideSourceFolder.forEach((file) => {
    fsProm.copyFile(path.join(sourceFolderPath, file), path.join(newFolderPath, file));
  })

};
copyDir();
