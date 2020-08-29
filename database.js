const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
})
    .then(db => console.log("coneccted"))
    .catch(err => console.log(err))