const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src', 'assets', 'icons');

// Function to convert filename to PascalCase with "Icon" suffix
function toPascalCaseIcon(str) {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase()) + 'Icon';
}

fs.readdir(iconsDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.svg') {
      const filePath = path.join(iconsDir, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        const vueComponent = `<template>\n${data}\n</template>`;
        const vueFileName = toPascalCaseIcon(path.basename(file, '.svg')) + '.vue';
        const vueFilePath = path.join(iconsDir, vueFileName);

        fs.writeFile(vueFilePath, vueComponent, err => {
          if (err) throw err;
          console.log(`Converted ${file} to ${vueFileName}`);
        });
      });
    }
  });
});