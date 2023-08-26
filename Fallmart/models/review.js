const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
name:{type:String,default:'Anonymous'},
rating:{type:Number,min:1,max:5,default:0}
})

module.exports = mongoose.model("review",reviewSchema)