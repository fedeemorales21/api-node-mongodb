if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
    

const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const cors = require('cors')
const path = require('path')



// init
const app = express()
require('./database')

// settings
app.set('port', process.env.PORT || 3000)


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
app.use(cors())

// routes
app.use('/api/posts', require('./routes/posts'))
app.use('/api/users', require('./routes/users'))


// public
app.use(express.static(path.join(__dirname,'public')))

// start server
app.listen(app.get('port'), ()=> console.log(`Start in ${app.get('port')}`) )