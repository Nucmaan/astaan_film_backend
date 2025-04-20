const express = require("express");
const router = express.Router();

const { createSubTask,getAllSubTasks,getSubTaskById,updateSubTask,deleteSubTask, getSubTasksByTaskId } = require("../Controllers/subTask.js");

const { upload } = require("../middleware/uploadMiddleware.js");

router.post("/create",upload.array("file_url",5),createSubTask);
router.get("/allTasks",getAllSubTasks);
router.get("/getSingleSubTask/:id",getSubTaskById);
router.put("/UpdateSubTask/:id",upload.array("file_url",5),updateSubTask);
router.delete("/DeleteSubTask/:id",deleteSubTask);
router.get("/task/:taskId",getSubTasksByTaskId);

module.exports = router;
