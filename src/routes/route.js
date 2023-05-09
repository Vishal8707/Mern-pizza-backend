const express = require('express')
const router = express.Router()
const {pizzaList,getpizaaList} = require('../Controllers/pizzaController')

router.get('/test-me', function (req, res) {
    res.send({ test: "Test-API" })
})

router.post('/createList',pizzaList)
router.get('/get',getpizaaList)

module.exports = router