# ToDoList API Documentation

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [Create User (Register)](#create-user-register)
  - [Login](#login)
  - [Create ToDo](#create-todo)
  - [Get All ToDos](#get-all-todos)
  - [Get ToDo Detail](#get-todo-detail)
  - [Update ToDo](#update-todo)
  - [Delete ToDo](#delete-todo)
  - [Delete All ToDos](#delete-all-todos)

# Introduction

This API provides functionality for managing a ToDoList application. It is built using Express.js, Sequelize for database interaction, and includes authentication and authorization features.

# Getting Started

## Prerequisites

- Node.js
- npm
- MySQL Database
- Sequelize CLI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nazilah17/todo-list-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

   Install dependencies:

   ```bash
   Copy code
   npm install
   ```

# Database-setup

1. Configure the database connection in config/config.json.

2. Run Sequelize migrations to create the database tables:

   ```bash
   npx sequelize-cli db:migrate
   ```

3. Seed the database with initial data:

   ```bash
   npx sequelize-cli db:seed:all
   ```

# Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The application will be accessible at http://localhost:3000.

# Endpoints

## Create user register

Endpoint : /auth/register
Method : POST
Deskripsi : Endpoint ini digunakan untuk mendaftarkan pengguna baru ke dalam aplikasi ToDoList.
Request Body :

```json
{
  "username": "newuser",
  "password": "newpassword"
}
```

Response :
Sukses (Status Code: 201)

```json
{
  "message": "User registered successfully"
}
```

Gagal (Status Code: 500)

```json
{
  "error": "Internal Server Error: Failed to register user."
}
```

## Login

Endpoint : /auth/login
Method : POST
Deskripsi : Endpoint ini digunakan untuk login ke dalam aplikasi ToDoList dan mendapatkan token JWT.
Request Body :

````json
{
  "username": "existinguser",
  "password": "existingpassword"
}

Response        :
Sukses (Status Code: 200)
```json
Copy code
{
  "token": "jwt_token_here"
}
````

Gagal (Status Code: 401)

```json
{
  "error": "Invalid username or password"
}
```

## Create Todo

Endpoint : /todos
Method : POST
Deskripsi : Endpoint ini digunakan untuk membuat todo baru.
Request Header
Authorization : Bearer jwt_token_here
Request Body :

```json
{
  "title": "New Todo",
  "description": "Description of the new todo"
}
```

Response :
Sukses (Status Code: 201)

```json
{
  "id": 1,
  "title": "New Todo",
  "description": "Description of the new todo",
  "completed": false,
  "userId": 1,
  "createdAt": "2024-01-14T00:00:00.000Z",
  "updatedAt": "2024-01-14T00:00:00.000Z"
}
```

Gagal (Status Code: 500)

```json
{
  "error": "Internal Server Error: Failed to create todo."
}
```

## Get All Todos

Endpoint : /todos
Method : GET
Deskripsi : Endpoint ini digunakan untuk mendapatkan semua todos yang dimiliki oleh pengguna.
Request Header
Authorization : Bearer jwt_token_here
Response :
Sukses (Status Code: 200)

```json
[
  {
    "id": 1,
    "title": "New Todo",
    "description": "Description of the new todo",
    "completed": false,
    "userId": 1,
    "createdAt": "2024-01-14T00:00:00.000Z",
    "updatedAt": "2024-01-14T00:00:00.000Z"
  }
  // ... (todos lainnya)
]
```

Gagal (Status Code: 500)

```json
{
  "error": "Internal Server Error: Failed to retrieve todos."
}
```

## Get Todo Detail

Endpoint : /todos/:id
Method : GET
Deskripsi : Endpoint ini digunakan untuk mendapatkan detail todo berdasarkan ID.
Request Header
Authorization : Bearer jwt_token_here
Response :
Sukses (Status Code: 200)

```json
{
  "id": 1,
  "title": "New Todo",
  "description": "Description of the new todo",
  "completed": false,
  "userId": 1,
  "createdAt": "2024-01-14T00:00:00.000Z",
  "updatedAt": "2024-01-14T00:00:00.000Z"
}
```

Gagal (Status Code: 404)

```json
{
  "error": "Todo not found"
}
```

## Update Todo

Endpoint : /todos/:id
Method : PUT
Deskripsi : Endpoint ini digunakan untuk mengubah informasi todo berdasarkan ID.
Request Header
Authorization : Bearer jwt_token_here
Request Body :

```json
{
  "title": "Updated Todo",
  "description": "Updated description"
}
```

Response :
Sukses (Status Code: 200)

```json
{
  "message": "Todo updated successfully"
}
```

Gagal (Status Code: 404)

```json
{
  "error": "Todo not found"
}
```

## Delete Todo

Endpoint : /todos/:id
Method : DELETE
Deskripsi : Endpoint ini digunakan untuk menghapus todo berdasarkan ID.
Request Header
Authorization : Bearer jwt_token_here
Response :
Sukses (Status Code: 200)

```json
{
  "message": "Todo deleted successfully"
}
```

Gagal (Status Code: 404)

```json
{
  "error": "Todo not found"
}
```

## Delete All Todos

Endpoint : /todos
Method : DELETE
Deskripsi : Endpoint ini digunakan untuk menghapus semua todos yang dimiliki oleh pengguna.
Request Header
Authorization : Bearer jwt_token_here
Response :
Sukses (Status Code: 200)

```json
{
  "message": "All todos deleted successfully"
}
```

Gagal (Status Code: 500)

```json
{
  "error": "Internal Server Error: Failed to delete all todos."
}
```
