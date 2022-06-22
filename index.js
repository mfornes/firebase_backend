const express = require('express')
const bodyParser = require('body-parser')
const admin = require('./config')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.post('/send', (req, res) => {

  admin.getMessaging().send(req.body.message).then((response) => {
    res.status(200).send("Notification sent successfully", response)
  }).catch((error) => {
    res.status(error.status).send("Error sending message:", error)
  });
  
})

app.listen(PORT, () =>{
    console.log(`Listening on ${ PORT }`)
})