const { Schema, model } = require('mongoose')

const UserScheme = new Schema({
    username: {type:String, required :true},
    password:{type:String, required :true}
})


module.exports = model('User', UserScheme)