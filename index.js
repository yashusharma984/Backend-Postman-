import express from "express";
const app = express();
const port = 3000;

// it will send the request to the server hello yash is here
app.get("/",(req, res) =>{
    res.send("<h1>Home Page </h1><h1> About </h1>");
    // console.log(req , rawHeaders);
});

app.get("/about", (req ,res)=>{
    res.send(" <p> YASH BHARDWAJ <br> Contact No: +91 8395944956 <br> E-mail: Yashusharma984@gmail.com <br> LinkedIn : https://www.linkedin.com/in/yash-bhardwaj <br> GitHub: https://github.com/yashusharma984 <br> YouTube: https://www.youtube.com/@ybeditinganimation </p> ");
});

app.post("/register" , (req, res)=>{
 res.sendStatus(201);
});

app.put("/user/yash",(req, res)=>{
res.sendStatus(200);
});

app.patch("/user/yash", (req, res)=>{
res.sendStatus(200);
});

app.delete("/user/yash", (req, res)=>{
res.sendStatus(200);
});



app.listen(port, ()=>{
    console.log(`Server Started on port ${port}.`);
});