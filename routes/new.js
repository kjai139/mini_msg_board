const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.send("Hello you're in new")
})

router.post('/new', (req, res) => {
    messages.push({
        text: req.body.messageText,
        user: req.body.user,
        added: new Date()
        
    })
    res.redirect('/')
})


module.exports = router