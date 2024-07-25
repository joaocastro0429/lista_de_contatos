import express from 'express'

const routes=express.Router()

routes.get('/',(req,res)=>{
  return res.json({msg:"bem vindo a API"})
})


export default routes