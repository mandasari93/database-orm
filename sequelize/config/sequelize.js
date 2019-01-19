const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo_app", "root", "manda1007", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;