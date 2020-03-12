const express = require('express')
const path = require('path')
const getStopData = require('./getStopData')
const drawStopMarkers = require('./public/drawStopMarkers')

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
    const stopData = getStopData.getStopData(req.query.subwayline)
    drawStopMarkers.drawStopMarkers(stopData)
})

app.listen(port,() => {
    console.log('Server is up on port 3000.')
})