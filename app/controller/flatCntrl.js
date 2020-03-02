const Flat = require('../model/Flat-coupon-model')

module.exports.create = (req,res)=>{
    const body = req.body
    const flat = new Flat(body)
    flat.save()
        .then(flat=>{
            res.json(flat)
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.list=(req,res)=>{
    Flat.find().populate('coupon_id')
        .then(flat=>{
            res.json(flat)
        })
        .catch(err=>{
            res.json(err)
        })
}
module.exports.delete=(req,res)=>{
    const id = req.params.id
    Flat.findOneAndDelete({coupon_id:id})
        .then(flat=>{
            res.json(flat)
        })
        .catch(err=>{
            res.json(err)
        })
}