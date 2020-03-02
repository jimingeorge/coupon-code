const Coupon = require('../model/Code-model')

module.exports.create = (req,res)=>{
    const body = req.body
    const coupon = new Coupon(body)
    coupon.save()
        .then(coupon=>{
            res.json(coupon)
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.list = (req,res)=>{
    Coupon.find()
        .then(coupon=>{
            res.json(coupon)
        })
        .catch(err=>{
            res.json(err)
        })
}