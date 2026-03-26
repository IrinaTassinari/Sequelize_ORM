// Импортируем типы данных Sequelize
import { DataTypes } from "sequelize";
// Импортируем подключение к БД
import sequelize from '../config/db.js';
/**
 * Создание модели Account
 * Метод define()
 * 
 * Что принимает:
 * 1 параметр - имя модели
 * 2 параметр - объект со структурой таблицы
 * 3 параметр - дополнительные настройки
 * 
 * Что возвращает:
 * Model (модель Sequelize)
 */
const Account = sequelize.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    // Явное указание имени таблицы в БД
    tableName: 'accounts',
    // Отключаем автоматические timestamps (временные метки)
    timestamps: false
});
export default Account;