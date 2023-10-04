const express = require("express");
const { UsersController } = require("./src/controllers/UsersController.js");
const app = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');


// app.get("/api/home", (req,res)=> {
  //   // res.json({ message : "jalan ajg"});
  // })
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/user',UsersController.getUser);
app.post('/user/register',UsersController.regisUser);

app.listen(PORT, () => {
  console.log(`Server started at prot ${PORT}`);
})