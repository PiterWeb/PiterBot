const mongoose = require('mongoose')

var mongoPath = "mongodb+srv://piterz:"+process.env.mongopsw+"@cluster0.zwikd.mongodb.net/piterbot?retryWrites=true&w=majority"

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const kittySchema = new mongoose.Schema({
        name: String
    });
    
    const Kitten = mongoose.model('Kitten', kittySchema);
      
      const fluffy = new Kitten({ name: 'fluffy' });

      fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
      });

    return mongoose.model('Kitten')

    return mongoose;

}