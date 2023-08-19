import express from "express";
import User from "./router/userRoute";
import Post from "./router/postRoute";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json("123");
});

app.use("/users", User);
app.use("/posts", Post);
app.listen(8000);
