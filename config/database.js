const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/lista-tarefas',{useNewUrlParser: true, useUnifiedTopology: true}) 
  .then(() => console.log('conectado ao mongoDB'))
  .catch((err) => console.log(err))





