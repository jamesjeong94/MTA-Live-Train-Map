const express = require('express')
const path = require('path')
const drawSubwayMarker = require('./stopMarker')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'/public')

app.use(express.static(publicDirectoryPath))
app.set('view engine','html')


app.get('/', (req,res) => {
    res.sendFile(publicDirectoryPath+'/index.html')
})

app.get('/mta', (req,res) => {
    console.log(req.query.subwayline)
    console.log(drawSubwayMarker.drawSubwayMarkers(req.query.subwayline))
})

app.listen(port,() => {
    console.log('Server is up on port 3000.')
})