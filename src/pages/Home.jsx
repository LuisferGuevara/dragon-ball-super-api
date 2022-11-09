import React from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Dragon Ball Super</h1>
        <p>El mejor anime de la historia</p>
      </div>

      <div>
        <img src="/assets/goku-blue.png" alt="home img" className="home--img floating" />
      </div>
    </div>
  );
};

export default Home;
