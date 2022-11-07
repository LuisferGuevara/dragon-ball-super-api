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
        <img 
        src="https://mangaplus.shueisha.co.jp/drm/title/200025/title_thumbnail_portrait_list/14359.jpg?key=ca788148c2faeb3324bcc1a7ae8688d5&duration=86400" 
            alt="home img"
            className="home--img floating"
        />
      </div>
    </div>
  );
};

export default Home;
