const express = require('express')

const app = express()
app.post('/', (request, response)=> {
    response.send('Hola POST')

})
/*
*
*
*     FUNCIONALIDAD
*
*/
//http://localhost:3000/

app.listen(3000,()=>{
    console.log('listening on port 3000')
})