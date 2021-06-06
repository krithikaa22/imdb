const mongoose = require('mongoose')

const coverImageBasePath = '/uploads/cover'

const movie = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    genre: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    review: {
        type: [String]
    }
})

module.exports = mongoose.model('movie', movie)
module.exports.coverImageBasePath = coverImageBasePath