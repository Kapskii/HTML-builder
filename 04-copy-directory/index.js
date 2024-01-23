const fs = require('fs/promises');
const path = require('path');

async function dublicate() {
  const sourceFolder = path.join(__dirname, 'files');
  const destinationFolder = path.join(__dirname, 'files-copy');

  try {
    await fs.mkdir(destinationFolder, { recursive: true });

    const files = await fs.readdir(sourceFolder);

    for (const file of files) {
      const sourceFP = path.join(sourceFolder, file);
      const destinationFP = path.join(destinationFolder, file);

      await fs.copyFile(sourceFP, destinationFP);
    }

    console.log('Directory dublication.');
  } catch (error) {
    console.error(`Error dublication: ${error.message}`);
  }
}

dublicate();