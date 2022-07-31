const express = require('express')
const router = express.Router()
const minibrand = require('../../database/minibrand')
const _ = require('lodash')


const minibrandTotal = minibrand.length

//Get all Mini Brands Series 3
router.get('/', (req, res) => {
    res.json(minibrand)})

//Get mini brand by series number
router.get('/seriesno/:seriesNo', (req, res) => {
    const minibrandSeriesNo = req.params.seriesNo;
    const found = minibrand.some(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandItemNo))} is not a itemNo in our database.` 
            }
        );
    }
})

//Get mini brands by item number
router.get('/itemno/:itemNo', (req, res) => {
    const minibrandItemNo = req.params.itemNo;
    const found = minibrand.some(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandItemNo))} is not a itemNo in our database.` 
            }
        );
    }
});

//find mini brands by rarity
router.get('/rarity/:rarity', (req, res) => {
    const minibrandRarity = req.params.rarity;
    const found = minibrand.some(minibrand => minibrand.rarity.toString().toLowerCase().replace(/\s/g, '') === minibrandRarity.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.rarity.toString().toLowerCase().replace(/\s/g, '') === minibrandRarity.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandRarity))} is not a rarity in our database.` 
            }
        );
    }
});




module.exports = router