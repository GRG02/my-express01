const express = require('express')
const routepages = require('./routes/routepages')

const app = express()

app.use('/', routepages)

app.listen(3000, ()=>{
    //คำสั่งใดๆ ก็ได้ที่อยากให้ทำงานตอน Web Server ทำงาน
    console.log('Server running on port 3000....')
})