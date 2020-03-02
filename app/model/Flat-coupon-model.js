const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flatSchema = new Schema({
    coupon_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Code'
    },
    minCartPrice:{
        type:Number,
        required:true,
        validate:{
            validator:value=>{
                console.log(value)
                if (value <= 0){
                    return false
                }
            },
            message:`minCartPrice must be above 0`
        }
    },
    discountAmnt:{
        type:Number,
        required:true,
        validate:{
            validator:value=>{
                console.log(value)
                if (value >= this.minCartPrice){
                    return false
                }
            },
            message:`discountAmnt must be greater than minCartPrice`
        }
    }
})

const Flat = mongoose.model('Flat',flatSchema)

module.exports = Flat