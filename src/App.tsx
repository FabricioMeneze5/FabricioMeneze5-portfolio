import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './sections/header';
import Hero from './sections/hero';
import Projects from './sections/projects';
// import Contact from './sections/contact';
// import Footer from './sections/footer';
// import Services from './sections/services/Services';

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
      <ThemeProvider theme={getTheme ? themeDark : themeLight}>
        <GlobalStyle />
        <Header changeTheme={changeTheme} isDark={getTheme} />
        <Hero />
        <Projects />
        {/*
        <Services />
        <Contact />
        <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
