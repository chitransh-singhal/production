import React from "react";
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Marqueew from './components/Marqueew'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-auto mx-auto font-GillSans'>
      <HeroSection />
      <AboutSection />
      <Showcase />
      <Services />
      <Portfolio />
      <Marqueew />
      <Testimonials />
      <div class="w-full h-auto max-w-full mx-[auto] mt-[50px] bg-white flex justify-center items-center">
        <img src="/assets/logos.png" alt="logo" />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
