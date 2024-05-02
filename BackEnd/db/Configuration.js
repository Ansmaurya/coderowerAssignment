const mongoose=require('mongoose');


const configurationSchema = new mongoose.Schema({
    configId: String,
    data: [[String]]
});

const Configuration = mongoose.model('Configuration', configurationSchema);

module.exports = Configuration;