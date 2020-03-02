const express = require('express')
const router = express.Router()
const couponCntrlr = require('../app/controller/couponCntrlr')
const flatCntrlr = require('../app/controller/flatCntrl')
const percentageCntrlr = require('../app/controller/percentageCntrl')
const mainCntrlr = require('../app/controller/mainCntrlr')

router.get('/couponvalidator',mainCntrlr.calc)

router.post('/coupon',couponCntrlr.create)
router.get('/coupon',couponCntrlr.list)

router.post('/coupon/flatcoupon',flatCntrlr.create)
router.get('/coupon/flatcoupon',flatCntrlr.list)
router.delete('/coupon/flatcoupon/:id',flatCntrlr.delete)

router.post('/coupon/percentagecoupon',percentageCntrlr.create)
router.get('/coupon/percentagecoupon',percentageCntrlr.list)
router.get('/coupon/percentagecoupon/:id',percentageCntrlr.delete)

module.exports = router