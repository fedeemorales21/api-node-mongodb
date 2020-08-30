const { Schema, model } = require('mongoose')

const PostScheme = new Schema({
    title: {type:String, required :true},
    content: {type:String, required :true},
    imagePath: {type:String},
    author:{type:String,required:true},
    dateCreation:{type:Date,default:Date.now}
})


module.exports = model('Post', PostScheme)