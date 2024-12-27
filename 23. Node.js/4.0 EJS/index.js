import express from "express";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');



app.get("/",(req, res) =>{
    const day = new Date();
    const today = day.getDay();
    let test = ["weekday", "work hard"];
    if (today ===0 || today ===6 ){
        test = ["weekend", "have fun"];
     }
   
    res.render("index.ejs",{
        blank1 : test[0],
        blank2 : test[1],
        }
     )
} );





app.listen(port , () =>{
    console.log(`Listening at port ${port}`)
})