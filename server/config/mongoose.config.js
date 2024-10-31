const mongoose = require('mongoose');

mongoose.connect('mongodb://root:example@mongodb:27017/wapt_db?authSource=admin',{ useNewUrlParser: true })
    .then(()=>console.log("Database connection established..."))
    .catch(err=>console.log("ERROR: ", err));