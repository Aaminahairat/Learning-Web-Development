const fs = require("fs");

//fs.writeFile("message.txt", "Hello World", "utf8", (err) => {
//if (err) throw err;
//console.log("This is file is saved");
//});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
