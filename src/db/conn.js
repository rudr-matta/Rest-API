const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics").then(() => {
    console.log("Connextion Successful");
}).catch((err) => {
    console.log("No Connection");
});