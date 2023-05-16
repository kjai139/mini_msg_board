var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  
  res.render('new')
})

router.post('/new', (req, res) => {
  console.log('hello')
  messages.push({
      text: req.body.messageTxt,
      user: req.body.name,
      added: new Date()
      
  })
  console.log('msg pushed')
  res.redirect('/')
})

module.exports = router;
