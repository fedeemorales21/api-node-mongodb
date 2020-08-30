const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
})
    .then(db => console.log("conected"))
    .catch(err => console.log(err))