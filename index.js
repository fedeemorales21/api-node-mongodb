const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')


// init
const app = express()


// settings
app.set('port',3000)


// mdw
app.use(morgan('dev'))
const stg =  multer.diskStorage({
    destination: path.join(__dirname,'public/photos'),
    filename(req,file,call){
        call(null,new Date().getTime() + path.extname( file.originalname))
    }
})
app.use(multer({stg}).single('image'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// start server
app.listen(app.get('port'), ()=> console.log(`Start in ${app.get('port')}`) )