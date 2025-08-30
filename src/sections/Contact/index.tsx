import { useState } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../../components/Button';
import Section from '../../components/Section';

import ImageForm from '../../assets/img/workTogether.png';

import * as S from './styles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const cleanForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || message === '') {
      alert('preencha o formulario');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_message: message,
    };

    emailjs
      .send('service_emv3afa', 'template_7mr4uyn', templateParams, {
        publicKey: 'oJZNNUQDgirCyR0Um',
      })
      .then(
        () => {
          alert('SUCCESS!');
          cleanForm();
        },
        (error) => {
          alert(`'FAILED: ', ${error.text}`);
        },
      );
  }

  return (
    <Section title="Contact" id="contact" $bgColor="bg2" $isLast>
      <S.ContactContainer>
        <h3>let&apos;s work together</h3>
        <div>
          <img src={ImageForm} alt="img" />

          <S.Form onSubmit={sendEmail} id="form">
            <div>
              <S.InputGroup>
                <label htmlFor="name">Name / Company</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </S.InputGroup>
            </div>
            <Button type="submit">Send</Button>
          </S.Form>
        </div>
      </S.ContactContainer>
    </Section>
  );
};

export default Contact;
