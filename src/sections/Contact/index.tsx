import Button from '../../components/Button';
import Section from '../../components/Section';

import ImageForm from '../../assets/img/workTogether.png';

import * as S from './styles';

const Contact = () => {
  return (
    <Section title="Contact" id="contact" $bgColor="bg2" $isLast>
      <S.ContactContainer>
        <h3>let&apos;s work together</h3>
        <div>
          <img src={ImageForm} alt="ants" />
          <S.Form>
            <div>
              <S.InputGroup>
                <label htmlFor="name">Name / Company</label>
                <input type="text" id="name" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" />
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
