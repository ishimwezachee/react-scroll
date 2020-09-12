import React from 'react';
import  Navbar from './components/navbar/navbar';
import Section1 from './components/sections/section1';
import Section2 from './components/sections/section2';
import Section3 from './components/sections/section3';
import Section4 from './components/sections/section4';

const App =()=>{
  return(
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default App ;