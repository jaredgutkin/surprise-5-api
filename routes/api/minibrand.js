const express = require('express')
const router = express.Router()
const minibrand = require('../../database/minibrand')
const _ = require('lodash')

const minibrandTotal = minibrand.length

//Get all Mini Brands Series 3
router.get('/', (req, res) => {
    res.json(minibrand)})

//Get mini brands by item no
router.get('/rarity/:rarity', (req, res) => {
    const minibrand_rarity = req.params.rarity;
    const found = minibrand.some(minibrand => minibrand.name.toLowerCase() === minibrand_rarity.toLowerCase());
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.name.toLowerCase() === minibrand_rarity.toLowerCase()));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrand_rarity))} is not a minibrand in our database.` 
            }
        );
    }
});




module.exports = router