const express = require('express')
const router = express.Router()
const {pizzaList,getpizaaList} = require('../Controllers/pizzaController')

router.get('/test-me', function (req, res) {
    res.send({ test: "Test-API" })
})

router.post('/createList',pizzaList)
router.get('/getList',getpizaaList)

module.exports = router