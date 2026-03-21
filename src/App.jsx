import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import placeholderImg from "./assets/placeholderImg.png";
import Stars from "./assets/Stars.png";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MeetTeamCard from "./components/MeetTeamCard";
import SponsCard from "./components/SponsCard";
import TitleCard from "./components/TitleCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <div className="App">
          <TitleCard
            title="Contact us"
            description="Lorem ipsum dolor sit amera. Maecenas at leo no"
            img1={Stars}
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
            description="Lorem ipsum dolor sit amera. Maecenas at leo non ligula congue cursus. Integer rhoncus urna tellus, fermentum ultrices risus finibus quis. In non pretium metus, quis ornare nunc. Phasellus sollicitudin consequat enim,"
          />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
