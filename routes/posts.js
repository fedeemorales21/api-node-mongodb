const { Router } = require('express')
const route = Router()
const { unlink } = require('fs')
const Post = require('../models/Post')

route.get('/', async (req,res) =>{
    const posts = await Post.find()
    res.json(posts)
})

route.get('/:id', async (req,res) =>{
    const posts = await Post.findById(req.params.id)
    res.json(posts)
})

route.post('/', async (req,res) =>{
    const { title,content,author } = req.body
    const imagePath =`/photos/${req.file.filename}`
    const newPost = new Post(title,content,author,imagePath)
    await newPost.save()
    res.json({success:true})
})

route.delete('/:id', async (req,res) =>{
   const post = await Post.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./public'+ post.imagePath))
    res.json({success:true})
})

module.exports = route