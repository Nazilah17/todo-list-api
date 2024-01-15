const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todos");
const { authenticateToken } = require("./middlewares/middleware");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to My ToDoList API",
    version: "1.0.0",
  });
});

app.use("/todos", authenticateToken);

app.use("/auth", userRoutes);
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
