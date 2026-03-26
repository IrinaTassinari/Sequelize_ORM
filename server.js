import express from "express";
// Импортируем подключение к БД
import sequelize from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import Account from "./models/account.js";

// Создаем экземпляр express web server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Маршруты
app.get("/", (_, res) => {
  res.send("Server работает с Sequelize ORM");
});

//Создание нов пользователя
app.post('/accounts', async (req,res) => {
  try{
    const {username, email} = req.body
    /**
     * метод create()
     * что делает: создаёт новую запись в табл DB
     * что принимает:
     * что возвр:
     */

    const newAccount = await Account.create({
      username,
      email
    })

    res.status(201).json({
      message: "User has been created",
      data: newAccount
    })
  } catch (error) {
    res.status(500).json({
      errors: "Error by creating new user",
      details: error.message
    })
  }
})

app.listen(PORT, async () => {
  try {
    /**
     * Метод authenticate()
     * Что делает: проверяет соединение с БД
     * Что принимает: ничего
     * Что возвращает: Promise
     */

    await sequelize.authenticate();
    console.log("Соединение с БД успешно установленно");
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  } catch (error) {
    console.error("Ошибка подключения к БД", error.message);
  }
});
