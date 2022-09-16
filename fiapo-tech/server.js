const path=require('path');
const express=require('express');

const app=express();

app.use(require('cors')())

app.use(express.json())

const upload=require('multer')();
 

app.use(express.static(path.join(__dirname,'build')))

app.post('/send',upload.single('file'),(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const tel=req.body.tel;
    const message=req.body.message;
    const file=req.file; 
    console.log("arquivo",file);

    require('./src/service/serviceEmail')(name,email,tel,message,file)
    .then(response=>res.json(response))
    .catch(err=>res.status(500).json(err));
})

app.listen(3000,()=>{
    console.log('server start');
})