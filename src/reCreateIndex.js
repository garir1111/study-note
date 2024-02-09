const fs = require("fs");
const path = require("path");

function listMdFilesInDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const mdFiles = files.filter((file) => path.extname(file) === ".md");
      resolve(mdFiles);
    });
  });
}

async function writeMdFileList(mdFiles, mdFilePath) {
  try {
    const fileList = mdFiles
      .map((file) => {
        return `[${file}](${path.join(
          "https://garir1111.github.io/study-note/md/",
          file
        )})`; // ファイル名を埋め込む
      })
      .join("\n\n");

    await fs.promises.writeFile(mdFilePath, fileList, "utf8");
    console.log("File list written to", mdFilePath);
  } catch (error) {
    console.error("Error writing to md file:", error);
  }
}

async function main() {
  const directoryPath = "../md";
  const mdFilePath = "../md/_docList.md"; // ファイル名のリストを保存するmdファイルのパス

  try {
    const mdFiles = await listMdFilesInDirectory(directoryPath);
    await writeMdFileList(mdFiles, mdFilePath);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
