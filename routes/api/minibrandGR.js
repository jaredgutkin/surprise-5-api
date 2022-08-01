const express = require('express')
const router = express.Router()
const minibrandGR = require('../../database/minibrand')
const minibrandSeriesNo = 'gr'

const minibrand = minibrandGR.filter(minibrand1 => minibrandGR.seriesNo.toString().toLowerCase().replace(/\s/g, '') === minibrandSeriesNo.toString().toLowerCase().replace(/\s/g, ''))

const minibrandTotal = minibrand.length

//Get all Mini Brands All Series
router.get('/', (req, res) => {
    res.json(minibrand)
})

//Get mini brand by item Number
router.get('/itemno/:itemNo', (req, res) => {
    const minibrandItemNo = req.params.itemNo;
    const found = minibrand.some(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.itemNo.toString().toLowerCase().replace(/\s/g, '') === minibrandItemNo.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandItemNo))} is not a ItemNo in our database.` 
            }
        );
    }
})


//Get mini brand by rarity
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
})

////find mini brands by brand Name
router.get('/brandname/:brandName', (req, res) => {
    const minibrandBrandName = req.params.brandName;
    const found = minibrand.some(minibrand => minibrand.brandName.toString().toLowerCase().replace(/\s/g, '') === minibrandBrandName.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.brandName.toString().toLowerCase().replace(/\s/g, '') === minibrandBrandName.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandBrandName))} is not a brand in our database.` 
            }
        );
    }
})

//Get mini brand by specialFeature
router.get('/sf/:specialFeature', (req, res) => {
    const minibrandSpecialFeature = req.params.specialFeature;
    const found = minibrand.some(minibrand => minibrand.specialFeature.toString().toLowerCase().replace(/\s/g, '') === minibrandSpecialFeature.toString().toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(minibrand.filter(minibrand => minibrand.specialFeature.toString().toLowerCase().replace(/\s/g, '') === minibrandSpecialFeature.toString().toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(minibrandSpecialFeature))} is not a SpecialFeature in our database.` 
            }
        );
    }
})




module.exports = router