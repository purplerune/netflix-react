import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://w7.pngwing.com/pngs/119/342/png-transparent-logo-netflix-nasdaq-nflx-brand-television-copywriter-floor-television-text-rectangle.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="User"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
