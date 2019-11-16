const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
    	type: String,
    	required: true
    },
    address: String,
    website: String,
    type: {
    	type: String,
    	required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    hrname: String,
    hremail: String,
    hrmobile: String
})

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company