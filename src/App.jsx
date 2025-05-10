import React from 'react';
import SetUP from './Components/Set-up.jsx';
import Hero from './Components/Hero-section.jsx';
import WhyChooseUs from './Components/Why-choose-us.jsx';
import Testimonials from './Components/testomonials.jsx';
import ContactForm from './Components/ContactForm.jsx';

const App = () => {
  return (
    <div>
      <Hero/>
       <SetUP/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
    </div>
  );
}

export default App;

