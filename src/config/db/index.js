require('dotenv').config();
const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://biru1234:biru1234@cluster0.fqeyx.mongodb.net/vjcdad?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Database connect successfully !');
    } catch (error) {
        console.log('Database connect failure !!');
    }
}

module.exports = { connect };
