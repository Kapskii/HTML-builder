const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      if (stats.isFile()) {
        const filename = path.parse(file).name;
        const extension = path.parse(file).ext.slice(1);
        const fileSize = (stats.size / 1024).toFixed(2);

        console.log(`${filename} - ${extension} - ${fileSize}kb`);
      } else {
        console.error(`${file} is not a file.`);
      }
    });
  });
});
