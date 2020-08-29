const { Router } = require('express')
const route = Router()

route.get('/', (req,res) =>{
    res.json(
        {
            qwe:12
        }
    )
})

module.exports = route