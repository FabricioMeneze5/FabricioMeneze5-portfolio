import Button from '../../components/Button';
import Section from '../../components/Section';

import * as S from './styles';

const Contact = () => {
  return (
    <Section title="Contact">
      <S.ContactContainer>
        <h3>let&apos;s work together</h3>
        <div>
          <img src="https://picsum.photos/900" alt="ants" />
          <S.Form>
            <div>
              <label htmlFor="name">Name / Company</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </div>
            <Button type="submit">Send</Button>
          </S.Form>
        </div>
      </S.ContactContainer>
    </Section>
  );
};

export default Contact;
