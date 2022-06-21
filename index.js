import express from 'express'
import bodyparser from 'body-parser'
import { admin } from './config'

const app = express()
app.use(bodyparser.json())

const port = process.env.PORT || 3000

app.post('/send', (req, res) => {

    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };

    const payload = {
            notification: {
            title: "This is a Notification",
            body: req.body.message
        }
    };

    const token = req.body.token

    admin.messaging().sendToDevice(token, payload, notification_options).then( response => {   

        res.status(200).send("Notification sent successfully")
    
    }).catch( error => {
        console.log(error);
    });

})

app.listen(port, () =>{
    console.log("Listening to port: " + port)
})