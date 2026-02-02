import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { MapDemo7 } from './components/MapDemo7';
import { MapDemo8 } from './components/MapDemo8';
import { MapDemo9 } from './components/MapDemo9';
import { MapDemo10 } from './components/MapDemo10';
//import './App.css'

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {/* <MapDemo1></MapDemo1>
      <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      {/* <MapDemo4></MapDemo4> */}
      {/* <MapDemo5></MapDemo5> */}
      {/* <MapDemo6></MapDemo6> */}
      {/* <MapDemo7></MapDemo7> */}
      {/* <MapDemo8></MapDemo8> */}
      {/* <MapDemo9></MapDemo9> */}
      <MapDemo10></MapDemo10>
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
