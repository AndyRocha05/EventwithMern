const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
title:{
    type: String,
    required: '{PATH} is required'
},
type:{
    type: String,
    required: '{PATH} is required'
},
date:{
    type: Date,
    required: '{PATH} is required'
},
time:{
    type: Number,
    required: '{PATH} is required'
},
endTime:{
    type: Number,
    required: '{PATH} is required'
},
user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
}
},{
timestamps:true

})
module.exports= mongoose.model('Event',EventSchema)