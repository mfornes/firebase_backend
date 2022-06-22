const admin = require('firebase-admin')
require('dotenv').config()

const GOOGLE_CREDENTIALS = JSON.parse(process.env.GOOGLE_CREDENTIALS)

admin.initializeApp({
  credential: admin.credential.cert(GOOGLE_CREDENTIALS),
})

module.exports.admin = admin