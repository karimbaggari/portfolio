import React from 'react';
import { Header , Nav , About , Skills, Portfolio, Testimonials, Contact, Footer} from './components/index';
export const App = () => {
  return (
    <>
      <Header />
       <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
     <Footer />
    </>
  )
}

export default App;