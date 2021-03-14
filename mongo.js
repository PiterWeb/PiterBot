const mongoose = require('mongoose')

var mongoPath = "mongodb+srv://piterz:"+process.env.mongopsw+"@cluster0.zwikd.mongodb.net/piterbot?retryWrites=true&w=majority"

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose;
}