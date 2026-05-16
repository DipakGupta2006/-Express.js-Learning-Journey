const express = require("express");
const app = express();
const path = require("path");

// middleware
app.use(express.urlencoded({ extended: true }));

// static folder
app.use(express.static("public"));

// ejs setup
app.set("view engine", "ejs");

// form page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "feedback.html"));
});

// submit route
// app.post("/submit", (req, res) => {
//     // const { name, age, email, feedback } = req.body;
//     const name = req.body.name;
//     const age = req.body.age;
//     const email = req.body.email;
//     const feedback = req.body.feedback;

//     res.render("dashboard", {
//         name,
//         age,
//         email,
//         feedback
//     });
// });


app.post("/submit", (req, res) => {

    const userData = req.body;
    // backend me ye chal rha hai 
//const userData = {
//    name: req.body.name,
//    age: req.body.age,
//    email: req.body.email,
//    feedback: req.body.feedback
// };

    res.render("dashboard", { userData });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// PS D:\Dipak Projects\Express js> mkdir feedback-app
// >> cd feedback-app
// >> npm init -y
// >> npm install express ejs





