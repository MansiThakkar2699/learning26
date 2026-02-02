import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
//import './App.css'

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent>
      {/* <h1>ALL TAG MUST HAVE CLOSING TAG</h1> <br></br> */}
      {/* <h4>AT A TIME WE CAN RETURN ONLY 1 TAG....</h4>
      <h4>
        whatever written inside return statment will be display on browser
      </h4> */}
    </div>
  )
}

export default App
