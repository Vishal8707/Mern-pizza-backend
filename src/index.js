const express = require('express')
const route = require('./routes/route')
const mongoose= require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://Akhil:KEhaXH2bxy3A6hz3@cluster0.0r73evu.mongodb.net/mernPizza", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))
app.use("/", route)


app.listen(5000, function () {
    console.log("Express app running on port 5000")
})