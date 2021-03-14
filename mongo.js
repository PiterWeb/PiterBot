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

    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'

    kittySchema.methods.speak = function () {
        const greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
      }
      
      const fluffy = new Kitten({ name: 'fluffy' });

      fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
      });

      Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
      });

      Kitten.find({ name: /^fluff/ }, callback);

    return mongoose;

}