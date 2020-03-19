const path = require("path");
const fs = require("fs-extra");
const glob = require('glob');

// copy platform compatible node binary to library
function loadLibrary(libraryName, destPath) {
    const parentFolder = path.join(__dirname, "native");

    const nodepregypFiles = glob(`${parentFolder}/${libraryName}*${process.arch}*.node`, {
        sync: true
      });
      let srcNodeFile = null;
      nodepregypFiles.forEach((file) => {
        try {
          var _temp = require(file);
          srcNodeFile = file;
          console.log('using', file);
        } catch (e) {
        }
      });

      if (!srcNodeFile) {
        console.log('[Warn]', 'no library available after trying files', nodepregypFiles);
      } else {
        // copy library node
        fs.copyFileSync(srcNodeFile, destPath);
      }
}

const detectionNodeDestPath = path.join(__dirname, `../usb-detection/build/Release/detection.node`);
loadLibrary('detector', detectionNodeDestPath);

const serialportNodeDestPath = path.join(__dirname, `../@serialport/bindings/build/Release/bindings.node`);
loadLibrary('serialport', serialportNodeDestPath);

exports.detector = require("usb-detection");
exports.SerialPort = require("serialport");