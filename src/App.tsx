import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import Projects from './sections/projects/Projects';
import Services from './sections/services/Services';

import { GlobalStyle } from './style';
import themeLight from './themes/light';
import themeDark from './themes/dark';

function App() {
  const [getTheme, setTheme] = useState(true);

  function changeTheme() {
    setTheme(!getTheme);
  }

  return (
    <>
      <ThemeProvider theme={getTheme ? themeLight : themeDark}>
        <GlobalStyle />
        <Header changeTheme={changeTheme} isDark={getTheme} />
        <Hero />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
