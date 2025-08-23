import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Stacks from './sections/Stacks';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
        <Stacks />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
