import express from 'express'
import { writeFile } from 'fs/promises'
import { readFile } from 'fs/promises'

const routes=express.Router()
const dataSource='./data/list.txt'
routes.post('/contact',async(req,res)=>{
   const {name}=req.body
   if(!name || name.length<2){
     return res.json({error:"O nome precisa ter pelo menos 2 Caracteres"})
   }
   // processamento 

   let list:string[]=[]
   try {
    // Esta lendo
    const data = await readFile(dataSource, 'utf-8'); 
     list=data.split('\n')
    
   } catch (error) {}
   list.push(name)
//    Esta criando
   await writeFile(dataSource,list.join('\n'))
   return res.status(201).json({contato:name})

   
})

routes.get('/contacts',async(req,res)=>{
   let list:string[]=[]

   try {
      const data=await readFile(dataSource,'utf-8')
      list=data.split('\n')
   } catch (error) {}
   return res.json({contatos:list})
})

routes.delete("/contact",async(req,res)=>{
   const {name}=req.query
   if(!name){
      return res.json({error:'Precisa mandar um nome para excluir'})
   }
   let list:string[]=[]

   try {
      const data=await readFile(dataSource,'utf-8')
      list=data.split('\n')
   } catch (error) {}
   // filtragem

   list=list.filter(item=>item.toLowerCase() !== (name as string).toLowerCase())

   await writeFile(dataSource,list.join('\n'))

   return res.json({contato:name})
})


export default routes






