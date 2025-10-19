const express = require("express");
const app = express();
const port = 3000;
const { users } = require("./data/users");

// middleware para parsear el body
app.use(express.json());

// middleware para permitir cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// get all users 
// http://localhost:3000/users
app.get('/users', (req, res) => {
  res.json({
    message: 'Usuarios',
    timestamp: new Date().toISOString(),
    status: 'success',
    users: users
    });
});

app.post("/users", (req, res) => {
  const { name, phone, email, address, age, photoUrl} = req.body;
  const user = { id: (users.length + 1).toString(), name, phone, email, address, age, photoUrl };
  users.push(user);
  res.status(201).json({
//  res.json({
    message: "Usuario creado",
    timestamp: new Date().toISOString(),
    status: "Success",
    user: user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});