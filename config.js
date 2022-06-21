import admin from 'firebase-admin'
import dotenv from 'dotenv'
dotenv.config()

admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT),
})

module.exports.admin = admin
