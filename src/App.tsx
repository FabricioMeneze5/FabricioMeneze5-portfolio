import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import Projects from './sections/projects/Projects';
import Services from './sections/services/Services';

import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
