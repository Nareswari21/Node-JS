const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/MahasiswaDB', { useNewUrlParser: true}, (err) =>{
    if (!err) {console.log('MongoDB COnnection Succeeded')}
    else {console.log('Error in DB Connection: ' + err)}
});

require('./mahasiswa.models');