import express from 'express'
import helmet from 'helmet'
import path from 'path'

import router from './routes/index'

const server=express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'../public')))

server.use('/',router)

server.listen(3333,()=>{
    console.log("running server http://localhost:3333")
})