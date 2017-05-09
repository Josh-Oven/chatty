const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('assets'))
app.use(bodyParser.json());

let port = 5000;

app.listen(port, function(){
  console.log('Cthulhu is docked at port ', port)
});

let messages = ['hello', 'goodbye', 'go away'];

app.get('/messages', function(req, res, next){

  res.status(200).json({ messages: messages })

})

app.post('/messages', function(req, res, next){
  messages.unshift({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
})
