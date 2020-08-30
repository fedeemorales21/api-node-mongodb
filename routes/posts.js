const { Router } = require('express')
const route = Router()

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
    const newPost = new Post(title,content,author)
    await newPost.save()
    res.json({success:true})
})

route.delete('/:id', async (req,res) =>{
   await Post.findByIdAndDelete(req.params.id)
    res.json({success:true})
})

module.exports = route