//não usado mais (aplicação em back)

// // const { response } = require('express');
// const nodemailer=require('nodemailer');
// module.exports=(name,email,tel,message,file)=>{
//     const dataPedido=new Date();
//     const smtp=nodemailer.createTransport({
//         // host:'smtp.office365.com',
//         // port:587,
//         // secure:false,
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
//             Cliente: ${name}
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
//     // return new Promise((resolve,reject)=>{
//         smtp.sendMail(mail,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return(err)
//             }else{
//                 return(result)
//             }
//         })
//     //     .them(response=>{
//     //         smtp.close();
//     //         return resolve(response);
//     //     })
//     //     .catch(error=>{
//     //         smtp.close();
//     //         return reject(error);
//     //     })
//     // })
// }




// // transport.sendMail({
// //     from:"Assistente <fiapo.assistente@hotmail.com>",
// //     to:'fiapotech@gmail.com',
// //     subject:"novo pedido!",
// //     html:'<h1>Teste com sucesso<h1>',
// //     text:"texto de teste!",

// //     attachments: [
// //         {
// //             filename: 'mod.jpg',
// //             path:'./img/mod.jpg',
// //             cid: 'uniq-mod.jpg'
// //         }
// //     ]
// // }).then(()=>console.log("enviado")).catch((err)=>console.log("deu erro: ", err))
