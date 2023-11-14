const express = require('express')

const app = express()

app.get('/',(request, response)=>{
    response.send('<h1>Wee wee wee</h1>')
})

app.get('/hello',(request, response)=>{
    response.send('<h1>Hello....</h1>')
})

app.get('/thailand/welcome',(request, response)=>{
    response.send('<h1>Welcome....</h1>')
})

app.get('/hi',(request, response)=>{
    response.send('<h1>Hi....</h1>')
})

app.listen(3000, ()=>{
    //คำสั่งใดๆ ก็ได้ที่อยากให้ทำงานตอน Web Server ทำงาน
    console.log('Server running on port 3000....')
})