const express = require('express')
const path = require('path')
const googleMapApi = require('./api/components/googlemapapi')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'/public')

app.use(express.static(publicDirectoryPath))
app.set('view engine','html')


app.get('/', (req,res) => {
    res.sendFile(publicDirectoryPath+'/index.html')
})

app.listen(port,() => {
    console.log('Server is up on port 3000.')
})