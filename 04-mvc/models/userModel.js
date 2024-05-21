

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        String,
        required: true
    }, 
    email: {
        String,
        required: true,
    },
    password: {
        String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);