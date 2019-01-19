const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING
},
{ timestamps: false} //jangan pernah dipakai kecuali bikin table sendiri
);

module.exports = User;