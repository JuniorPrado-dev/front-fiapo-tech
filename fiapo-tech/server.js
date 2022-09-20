//aplicação em back

// const path=require('path');
// const express=require('express');

// const app=express();

// app.use(require('cors')())

// app.use(express.json())

// const upload=require('multer')();
 

// app.use(express.static(path.join(__dirname,'build')))

// const nodemailer=require('nodemailer');
// const { resolve } = require('path');
// const { rejects } = require('assert');

// app.post('/send',upload.single('file'),(req,res)=>{
//     const name=req.body.name;
//     const email=req.body.email;
//     const tel=req.body.tel;
//     const message=req.body.message;
//     const file=req.file; 
//     // console.log("arquivo",file);
//     const dataPedido=new Date();

//     let smtp=nodemailer.createTransport({
//         host:'smtp.office365.com',
//         port:587,
//         secure:false,
//         auth:{
//             user:"fiapo.assistente@hotmail.com",
//             pass:"Fia123321."
//         }
//     })
    
//     const mail={
//         from:"Assistente <fiapo.assistente@hotmail.com>",
//         to:'fiapotech@gmail.com',
//         subject:`Novo pedido! (${dataPedido.getDate()})`,
//         text:`
//         Cliente: ${name}
//         Email: ${email}
//         Telefone: ${tel}
//         _________________________________________
        
//         Decrição do pedido: ${message}
//         _________________________________________
//         `,
//     }
//     if(file){
//         mail.attachments= [];
//         mail.attachments.push(
//             {
//                 filename: file.originalname,
//                 content:file.buffer
//             }
//             )
//     }
//     return new Promise((resolve,reject)=>{
//         resolve(
//             smtp.sendMail(mail,(err,result)=>{
//                 if(err){
//                     // console.log(err);
//                     smtp.close()
//                     return(err)
//                 }else{
                    
//                     // alert("a")
//                     smtp.close()
//                     console.log(result);
//                     return(result)
//                 }
//             })
//         )
//     }).then((result)=>{
//         return(result);
//     }
//     )
//     // return new Promise((resolve,reject)=>{

// //     require('./src/service/serviceEmail')(name,email,tel,message,file)
// //     .then(response=>{
// //         console.log("rep: ",response);
// //         res.json(response);
// //     })
// //     .catch(err=>{
// //         console.log("erro: ",err);
// //         res.status(500).json(err)});
// // })
// })

// app.listen(3000,()=>{
//     console.log('server start');
// })
