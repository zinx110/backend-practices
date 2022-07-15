const fs = require("fs");
const path = require("path");
const existingFolder = "./fileSystemModule/folder";
const newFolder = "./fileSystemModule/newfolder";
const renameFolder = "./fileSystemModule/renamefolder";

// add folder if not exist
const addFolder = async (folder) => {
  try {
    if (!fs.existsSync(folder)) {
      console.log(fs.existsSync(folder));
      console.log("folder dosn't exist");
      console.log("folder will be created now");

      fs.mkdirSync(folder);
      console.log(fs.existsSync(folder));
      console.log(
        "folder created, will write some files now and check the directory"
      );
      fs.writeFileSync(
        `${folder}/file1.txt`,
        "This file was made after creating the file using mkdirSync"
      );
      fs.writeFileSync(
        `${folder}/file2.txt`,
        "This file was also  made after creating the file using mkdirSync"
      );
      fs.writeFileSync(
        `${folder}/file3.txt`,
        "This file was also also made after creating the file using mkdirSync"
      );

      console.log(fs.readdirSync(folder));
    } else {
      console.log("folder exists ");
    }
  } catch (error) {
    console.log("mkdirError");
    console.log(error);
  }
};
// RenamingFolder
const renameFolderFunc = async (folder, newName) => {
  try {
    if (fs.existsSync(folder)) {
      console.log("folder exists");
      fs.renameSync(folder, newName);
      console.log("folder renamed");
      console.log("check root directory of this fs module practice");
      console.log(fs.readdirSync(path.dirname(folder + "../")));
    } else {
      console.log("new folder does not exist for renaming");
    }
  } catch (error) {
    console.log("renaming error");
    console.log(error);
  }
};
// delete folder
const deleteFolder = async (folder) => {
  try {
    if (fs.existsSync(folder)) {
      console.log("folder exists, will delete the renamed folder now");
      // fs.rmdirSync(folder, { recursive: true }); // Deprecated
      fs.rmSync(folder, { recursive: true });
      console.log("deleted the renamed folder");
    } else {
      console.log("renamed folder does not exist to delete");
    }
  } catch (error) {
    console.log("error in remove dir");
    console.log(error);
  }
};

const func = async (folder) => {
  console.log("Now checking if an existing folder exists.......");
  addFolder(existingFolder);
  console.log("Now checking if an nonexisting folder exists.......");
  addFolder(newFolder);

  console.log(
    "Now checking if the created folder exists, will be renamed if exists......."
  );
  renameFolderFunc(newFolder, renameFolder);

  console.log(
    "Now checking if the renamed folder exists, will be deleted if exists......."
  );
  deleteFolder(renameFolder);
};
func();
