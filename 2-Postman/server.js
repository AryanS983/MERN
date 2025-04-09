const express = require('express')
const router = require('./routes/auth-router')
const app = express()

app.use(express.json())

app.use(('/api/auth'),router)

app.get(('/'),(req, res)=>{
    res.status(200).send("Helcome to my website")
})


// app.get(('/register'),(req, res)=>{
//     res.status(200).send("Helcome to my website")
// })


app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})

// REQUESTS :-
// get -> to read data
// post -> to write data
// put -> append
// delete -> smajhane ka zaroorat hai kyaa