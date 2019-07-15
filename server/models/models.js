var mongoose = require('mongoose');

var WeatherSchema = new mongoose.Schema({
    city: { type: String, required: 'Your name must be longer than 2 characters', trim: true, minlength: 2},
},{ timestamps: true })

mongoose.model('Weather', WeatherSchema); 