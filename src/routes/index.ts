import express from 'express'
import { createContact, deleteContact, getContacts } from '../services/contact';

const routes=express.Router()
routes.post('/contact',async(req,res)=>{
   const {name}=req.body
   if(!name || name.length<2){
     return res.json({error:"O nome precisa ter pelo menos 2 Caracteres"})
   }
   // processamento 

   await createContact(name);
   return res.status(201).json({contato:name})

   
})

routes.get('/contacts',async(req,res)=>{
   let list = await getContacts();
   res.json({ contatos: list });
})

routes.delete("/contact",async(req,res)=>{
   const {name}=req.query
   if(!name){
      return res.json({error:'Precisa mandar um nome para excluir'})
   }
   await deleteContact(name as string);
   return res.json({contato:name})
})


export default routes






