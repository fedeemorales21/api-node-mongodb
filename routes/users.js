const { Router } = require('express')
const route = Router()

const User = require('../models/User')

route.get('/', async (req,res) =>{
    const users = await User.find()
    res.json(users)
})

route.get('/:id', async (req,res) =>{
    const users = await User.findById(req.params.id)
    res.json(users)
})

route.post('/', async (req,res) =>{
    const { username,password } = req.body
    const newUser = new User(username,password)
    await newUser.save()
    res.json({success:true})
})

route.delete('/:id', async (req,res) =>{
   await User.findByIdAndDelete(req.params.id)
    res.json({success:true})
})

module.exports = route