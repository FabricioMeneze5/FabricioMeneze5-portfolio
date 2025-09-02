import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';

import Button from '../../components/Button';
import Section from '../../components/Section';

import ImageForm from '../../assets/img/workTogether.png';

import * as S from './styles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertBox, setAlertBox] = useState({
    message: '',
    $showAlert: false,
    $hasError: false,
  });

  const cleanForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const validateForm = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;

    if (name === '' || email === '' || phone === '' || message === '') {
      setAlertBox({
        message: 'Fill in all fields',
        $showAlert: true,
        $hasError: true,
      });
      return false;
    }
    if (!emailInput.checkValidity()) {
      setAlertBox({
        message: 'Please enter a valid email',
        $showAlert: true,
        $hasError: true,
      });
      return false;
    }
    if (phone === undefined || phone.length < 9) {
      setAlertBox({
        message: 'Please enter a valid phone',
        $showAlert: true,
        $hasError: true,
      });
      return false;
    }
    return true;
  };

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

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
          setAlertBox({
            message: 'Email sent successfully',
            $showAlert: true,
            $hasError: false,
          });
          cleanForm();
        },
        (error) => {
          setAlertBox({
            message: `'Error: ', ${error.text}`,
            $showAlert: true,
            $hasError: true,
          });
        },
      )
      .finally(() => setLoading(false));
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
                <PhoneInput
                  international
                  autoComplete="tel"
                  id="phone"
                  onChange={(phone) => setPhone(phone)}
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
              <S.AlertBox $hasError={alertBox.$hasError} $showAlert={alertBox.$showAlert}>
                {alertBox.message}
              </S.AlertBox>
            </div>
            <Button type="submit" onClick={validateForm} disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </S.Form>
        </div>
      </S.ContactContainer>
    </Section>
  );
};

export default Contact;
