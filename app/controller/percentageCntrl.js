const Percentage = require('../model/Percent-coupon-model')

module.exports.create = (req,res)=>{
    const body = req.body
    const percentage = new Percentage(body)
    percentage.save()
        .then(percentage=>{
            res.json(percentage)
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.list=(req,res)=>{
    Percentage.find()
        .then(percentage=>{
            res.json(percentage)
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.delete=(req,res)=>{
    Percentage.findOneAndDelete({coupon_id:id})
        .then(percentage=>{
            res.json(percentage)
        })
        .catch(err=>{
            res.json(err)
        })
}