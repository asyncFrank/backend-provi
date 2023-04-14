const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: 'String',
        required: true,
        unique:true,
        max:120
    },
    likedStartups: Array,
})

module.exports = mongoose.model('User',userSchema)