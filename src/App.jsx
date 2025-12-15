import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import placeholderImg from "./assets/placeholderImg.png";
import Stars from "./assets/Stars.png"
import MeetTeamCard from "./components/MeetTeamCard";
import SponsCard from './components/sponsCard';
import TitleCard from './components/TitleCard';

function App() {
  return (
    
    <div className="App">
      <TitleCard
        title= "Contact us"
        description='Lorem ipsum dolor sit amera. Maecenas at leo no'
        img1= {Stars}
        img2={Stars}
      />

      <MeetTeamCard
        title="IT Officer"
        name="Mia Sudianto"
        img={placeholderImg}
      />

      <SponsCard
        title="Awesome Sponsor"
        logo={placeholderImg}
        description='Lorem ipsum dolor sit amera. Maecenas at leo non ligula congue cursus. Integer rhoncus urna tellus, fermentum ultrices risus finibus quis. In non pretium metus, quis ornare nunc. Phasellus sollicitudin consequat enim,'
      />

    </div>
  );
}


export default App;
