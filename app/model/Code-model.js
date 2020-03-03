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
                if (value > new Date()){
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
                let startDate
                this.startDate?startDate=this.startDate:startDate=new Date()
                // console.log(value < startDate)
                // console.log(value.getTime() > this.startDate.getTime());
                // console.log(value.getTime() < this.startDate.getTime());
                if (value <= startDate){
                    return false
                }
            },
            message:`endDate shouldn't be lesser than or equal to startDate`
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