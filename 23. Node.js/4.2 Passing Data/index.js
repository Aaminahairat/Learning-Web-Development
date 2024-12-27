import express from "express";
import bodyParser from "body-parser";
import { name, render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});


app.post("/submit", (req, res) => {

  const fullname = req.body["fName"]+req.body["lName"];
  const namecount = fullname.length;
  const data= {
    numberofletters : namecount,
  }
  res.render("index.ejs", data)
  console.log(namecount)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 