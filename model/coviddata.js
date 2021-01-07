const mongoose = require('mongoose');


const caseScheme = new mongoose.Schema({
    date: { type: Number, required: true},
    country: { type: String, required: true},
    state: { type: String, required: true},
    case: { type: Number,required: true},
    death : { type: Number, required: true}

});

var Case = module.exports = mongoose.model('case', caseScheme);
module.exports.get = function (callback, limit) {
    Case.find(callback).limit(limit);
}