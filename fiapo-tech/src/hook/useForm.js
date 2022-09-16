import { useState } from 'react';

export default function useForm(initialState) {
    const [form, setForm]=useState(initialState);
    
    const onChange = (event)=>{
        const {name}=event.target;
        if (name==="file"){
            const {files}=event.target;
            setForm({...form, [name]: files[0]});
        }else{
            const {value}=event.target;
            setForm({...form, [name]: value});
        }
        
    }
    const clear=()=>{
        console.log("limpando" ,initialState);
        setForm(initialState)
    }       
    return [form,onChange,clear]
}