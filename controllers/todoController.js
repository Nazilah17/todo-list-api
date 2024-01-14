const { Todo } = require("../models");

//Membuat todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // Assuming we extract userId from the token during authentication
    const todo = await Todo.create({ title, description, userId });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to create todo." });
  }
};

//Melihat semua todo
const getAllTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await Todo.findAll({ where: { userId } });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to retrieve todo." });
  }
};

//melihat detail todo
const getTodoDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const todo = await Todo.findOne({ where: { id, userId } });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to get todo details." });
  }
};

//Mengubah todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const userId = req.user.id;
    const [updatedRows] = await Todo.update({ title, description }, { where: { id, userId } });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to update details." });
  }
};

//Menghapus todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const deletedRows = await Todo.destroy({ where: { id, userId } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to delete todo." });
  }
};

//Menghapus semua todo
const deleteAllTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    await Todo.destroy({ where: { userId } });
    res.status(200).json({ message: "All todos deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error: Failed to delete all todos." });
  }
};

module.exports = { createTodo, getAllTodos, getTodoDetail, updateTodo, deleteTodo, deleteAllTodos };
