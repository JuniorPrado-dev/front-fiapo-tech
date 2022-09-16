import axios from 'axios';
import React from 'react';
import useForm from '../../hook/useForm';
import { FormH } from '../../Styled';
// import { serviceEmail } from '../../service/ServiceEmail';
export default function Form() {
    // let dd=new FormData();
    // dd.append("aa","ss")
    // dd.append("a2","ss33")


    //  const email=serviceEmail();
    const [data, onChange, clear] = useForm({ name: "", email: "", tel: "", message: "" })

    const formSub = (e) => {
        e.preventDefault();
        enviar();
        clear();
    }
    const enviar = (e) => {

        //     e.preventDefault()
        //     email(data.name,data.email,data.tel,data.message);
        //     const body={
        //     name:data.name,
        //     email:data.email,
        //     tel:data.tel,
        //     message:data.message,
        //     file:data.file
        // }
        // console.log(body);

        const formData = new FormData();

        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        })

        for (let key of formData.keys()) {
            console.log(key, formData.get(key))
        }

        axios.post('/send', formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
        }).then((response) => {
            alert("Pedido realizado!")
            console.log(response)
        }).catch((err) => {
            alert("algo deu errado =( Tente novamente mais tarde!")
            console.log(err)
        })

    }
    return (
        <FormH onSubmit={formSub}>
            <h1>Faça já seu pedido!</h1>
            <label htmlFor='name'>Nome: </label>
            <input type={'text'} name='name' id='name' onChange={onChange} value={data.name} required></input>

            <label htmlFor='email'>E-mail: </label>
            <input type={'email'} name='email' id='email' onChange={onChange} value={data.email} required></input>

            <label htmlFor='tel'>Telefone: </label>
            <input type={'tel'} name='tel' id='tel' onChange={onChange} value={data.tel} placeholder={"(DDD) 9.9999-9999"} required></input>

            <label htmlFor='message'>Descrição: </label>
            <textarea value={data.message} name='message' id='message' rows={8} required onChange={onChange}></textarea>

            <label htmlFor='file'>Anexar Molde (.jpg/.png) </label>
            <input  id='file' name='file' onChange={onChange} accept="image/*" type={'file'} ></input>
            <button type={'submit'}>Enviar</button>
        </FormH>
    );
}