const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { authenticateToken } = require("../middlewares/middleware");

router.post("/", authenticateToken, todoController.createTodo);
router.get("/", authenticateToken, todoController.getAllTodos);
router.get("/:id", authenticateToken, todoController.getTodoDetail);
router.put("/:id", authenticateToken, todoController.updateTodo);
router.delete("/:id", authenticateToken, todoController.deleteTodo);
router.delete("/", authenticateToken, todoController.deleteAllTodos);

module.exports = router;
