const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoDetail);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);
router.delete("/", todoController.deleteAllTodos);

module.exports = router;
