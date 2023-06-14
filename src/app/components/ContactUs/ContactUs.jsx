"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
debugger
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container mx-auto'>
      <h1 className='mb-10 md:text-start text-center'>Contactate con nosotros</h1>
      <h3 className='mb-10 md:text-start text-center'>En breve nos pondremos en contacto</h3>
        <div className='mx-2 lg:mx-96  md:mx-16'>
            <form className='flex flex-col container mx-auto' ref={form} onSubmit={sendEmail}>
              <label className='text-center mb-4'>Nombre</label>
              <input className='p-2 text-black rounded-xl shadow-md  shadow-slate-500' type="text" name="user_name" />
              <label className='text-center my-4'>Email</label>
              <input className='p-2 text-black rounded-xl shadow-md  shadow-slate-500' type="email" name="user_email" />
              <label className='text-center my-4'>Mensaje</label>
              <textarea className='p-2 text-black rounded-xl shadow-md  shadow-slate-500' rows={10} name="message" />
              <input  className='mt-6 hover:bg-white p-2 rounded-xl hover:text-black duration-500 ease-in-out' type="submit" value="Enviar" ></input>
            </form>
        </div>
    </div>
  );
};

export default ContactUs