const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require("mongoose");
const todos = require('./routes/tasks')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const signin = require('./routes/signin')
const userRoute = require('./routes/user')
const logout = require('./routes/signout')
// moddleware to get req.body datas
app.use(express.json());
app.use(cookieParser()); 

// routes

app.use(cors())
app.use("/api/v1/todos",todos);
app.use('/',signin)
app.use('/',userRoute)
app.use("/",logout)

// mondoDB connection
const MONGO_URL = "mongodb://localhost:27017/todo";
mongoDB.set("strictQuery", false);
mongoDB.connect(
  MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`DB CONNECTED`);
  }
);

app.listen(port, () => {
  console.log(`port running on ${port}`);
});
