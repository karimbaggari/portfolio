import React from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import './contact.css';
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>karim.baggari@gmail.com</h5>
          <a href='karim.baggari@gmail.com'>Send a message</a>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail />
          <h4>Linkedin</h4>
          <h5>Karim Baggari</h5>
          <a href='karim.baggari@gmail.com'>Send a message</a>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail />
          <h4>Whatsapp</h4>
          <h5>Click on the Icon</h5>
          <a href='karim.baggari@gmail.com'>Send a message</a>
        </article>
        </div>
      <form action=''></form>
      </div>
    </section>
  )
}

export default Contact