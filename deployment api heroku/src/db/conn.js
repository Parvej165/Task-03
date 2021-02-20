const mongoose = require('mongoose');

const URI = "mongodb+srv://parvej:parvej2000@cluster0.hsn65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const conDB = async() => {
    await mongoose.connect(URI, {
         useUnifiedTopology: true, 
         useNewUrlParser: true 
    });
    console.log("DB is connected");
}

module.exports = conDB;