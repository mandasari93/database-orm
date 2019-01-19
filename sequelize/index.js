const user = require("./models/User");

user
  .findAll()
  .then(data => console.log(data))
  .catch(err => console.log(err));


  user.create()