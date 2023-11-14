const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    res.sendFile('./views/home.html',{root:'.'})
})

app.get('/about',(req, res)=>{
    res.sendFile('./views/about.html',{root:'.'})
})

app.get('/service',(req, res)=>{
    res.sendFile('./views/service.html',{root:'.'})
})

app.get('/student/blog',(req, res)=>{
    res.sendFile('./views/blog.html',{root:'.'})
})

app.listen(3000, ()=>{
    //คำสั่งใดๆ ก็ได้ที่อยากให้ทำงานตอน Web Server ทำงาน
    console.log('Server running on port 3000....')
})