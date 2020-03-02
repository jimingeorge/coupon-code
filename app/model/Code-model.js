const mongoose = require('mongoose')
const Schema = mongoose.Schema

const codeSchema = new Schema({
    coupon:{
        type:String,
        required:true,
        unique:true
    },
    startDate:{
        type:Date,
        default:new Date(),
        required:true,
        validate:{
            validator:value=>{
                console.log(value)
                if (value < new Date().getDate){
                    return false
                }
            },
            message:`startDate shouldn't be lesser than today's date`
        }
    },
    endDate:{
        type:Date,
        required:true,
        validate:{
            validator:value=>{
                if (value <= this.startDate ){
                    return false
                }
            },
            message:`endDate shouldn't be lesser than or equal to startDate date`
        }
    },
    
    couponType:{
        type:String,
        enum:['flat','percentage'],
        required:true
    }
})

const Code = mongoose.model('Code',codeSchema)

module.exports = Code