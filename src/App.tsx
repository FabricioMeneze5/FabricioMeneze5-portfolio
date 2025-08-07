import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './sections/HeaderComponent';
import Hero from './sections/HeroComponent';
import Projects from './sections/ProjectsComponent';
import Services from './sections/ServicesComponent';
import Contact from './sections/ContactComponent';
import Footer from './sections/FooterComponent';

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
        <Services />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
