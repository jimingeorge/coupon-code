const mongoose = require('mongoose')
const Schema = mongoose.Schema

const percentageSchema = new Schema({
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
    maxDiscountAmnt:{
        type:Number,
        required:true,
        validate:{
            validator:value=>{
                console.log(value)
                if (value > this.minCartPrice){
                    return false
                }
            },
            message:`maxDiscountAmnt must be lesser than minCartPrice`
        }
    },
    discountPercentage:{
        type:Number,
        required:true,
        validate:{
            validator:value=>{
                console.log(value)
                if (value <= 0 || value>=100){
                    return false
                }
            },
            message:`discountPercentage must be between 1 and 99`
        }
    }
})

const Percentage = mongoose.model('Percentage',percentageSchema)

module.exports = Percentage