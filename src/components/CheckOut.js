import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    shippingAddress1: ''
  });
  const navigate = useNavigate();

  const errors ={
    name: form.name.length===0,
    email: form.email.length===0,
    shippingAddress1: form.shippingAddress1.length===0
  };

  const handleChange = (ev)=> {
    const {name,value} = ev.target;

    setForm((prevState) => {
      return{
        ...prevState,
        [name]: value
      };
    });
  }
  const handleSubmit = ev=>{
    if(formInvalid()){
      ev.preventDefault();
      return;
    }
    navigate('/orderconfirmation');
  }
  const formInvalid =() =>{
    const errors={
      name: form.name.length===0,
      email: form.email.length===0,
      shippingAddress1: form.shippingAddress1.length===0
    };
    const disabled = Object.keys(errors).some((x) => errors[x]);
    return disabled;
  }
}

export default CheckOut;