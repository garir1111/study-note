require("dotenv").config();
const fs = require("fs");
const path = require("path");

const directoryPath = path.join("..", "md");
const yourNameStr = process.env.YOURNAME;
const anonymizedYourNameStr = "yourName@";

function replaceStringInFiles(
  directoryPath,
  yourNameStr,
  anonymizedYourNameStr
) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error getting file stats:", err);
          return;
        }

        if (stats.isDirectory()) {
          replaceStringInFiles(filePath, yourNameStr, anonymizedYourNameStr);
        } else if (stats.isFile() && file.endsWith(".md")) {
          fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
              console.error("Error reading file:", err);
              return;
            }

            const updatedData = data.replace(
              new RegExp(yourNameStr, "g"),
              anonymizedYourNameStr
            );

            fs.writeFile(filePath, updatedData, "utf8", (err) => {
              if (err) {
                console.error("Error writing file:", err);
                return;
              }
            });
          });
        }
      });
    });
  });
}

replaceStringInFiles(directoryPath, yourNameStr, anonymizedYourNameStr);
console.log("Done!");
