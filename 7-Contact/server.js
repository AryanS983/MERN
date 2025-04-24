require("dotenv").config()          // in order to use dotenv we give an import statement to use the config function
const express = require('express')
const router = require('./routes/auth-router')
const app = express()
const connectdb = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')
const cors = require('cors')
const Servicerouter = require('./routes/service-router')
const adminrouter = require('./routes/admin-router')

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
}

app.use(cors(corsOptions))


app.use(express.json())

app.use(('/api/auth'),router)
app.use(('/api/doc'), Servicerouter)
app.use(('/api/admin'), adminrouter)


app.get(('/'),(req, res)=>{
    res.status(200).send("Helcome to my website")
})

 
// app.get(('/register'),(req, res)=>{
//     res.status(200).send("Helcome to my website")
// })


app.use(errorMiddleware)            // IMPORTANT : ALWAYS KEEP THE ERROR MIDDLEWARE AT THE END OF ALL ROUTES

connectdb().then(()=>{
    app.listen(3000, () => {
        console.log(`Server is Listening on 3000`)
    })
})


