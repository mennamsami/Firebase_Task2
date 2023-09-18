const admin = require("firebase-admin"); 
const express = require('express') 
 
const app = express() 
app.use(express.json()) 
 
const serviceAccount = require("C:\\Users\\Bakka\\Downloads\\Firebase_Task\\sic-task-f5c09-firebase-adminsdk-jrjog-f0bf5d1d16.json"); 
 
admin.initializeApp({ 
    credential: admin.credential.cert(serviceAccount) 
}); 
 
 
app.post('/', (req, res) => { 
    const db = admin.firestore(); 
    const collectionRef = db.collection("1").doc("2002"); 
    collectionRef.set(req.body) 
 
}) 
 
app.listen(3000, () => { 
    console.log(`listening on port 3000!`) 
})