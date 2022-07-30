const express = require('express')
const router = express.Router()
const MBS3 = require('../../database/MiniBrandsSeries3')
const _ = require('lodash')

const total_MBS3 = MBS3.length

//Get all Mini Brands Series 3
router.get('/', (req, res) => {
    res.json(MBS3)}
    )

//Get mini brands by item no
router.get('/itemno/:itemNo', (req, res) => {
    const MBS3_itemNo = req.params.itemNo;
    const found = MBS3
})



module.exports = router