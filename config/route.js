const express = require('express')
const router = express.Router()
const couponCntrlr = require('../app/controller/couponCntrlr')
const flatCntrlr = require('../app/controller/flatCntrl')
const percentageCntrlr = require('../app/controller/percentageCntrl')
const mainCntrlr = require('../app/controller/mainCntrlr')

router.get('/couponvalidator',mainCntrlr.calc)

router.post('/coupons',couponCntrlr.create)
router.get('/coupons',couponCntrlr.list)

router.post('/coupons/flatcoupons',flatCntrlr.create)
router.get('/coupons/flatcoupons',flatCntrlr.list)
router.delete('/coupons/flatcoupons/:id',flatCntrlr.delete)

router.post('/coupons/percentagecoupons',percentageCntrlr.create)
router.get('/coupons/percentagecoupons',percentageCntrlr.list)
router.get('/coupons/percentagecoupons/:id',percentageCntrlr.delete)

module.exports = router