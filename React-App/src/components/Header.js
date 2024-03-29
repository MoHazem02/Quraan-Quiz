import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          className="logo__img"
          src="./assets/images/quranIcon.png"
          alt="Icon of Quraan"
        />
        <span className="logo__link"><a href="https://github.com/MoHazem02/Quraan-Quiz" target="_blank" rel="noreferrer">Quraan Quiz</a></span>

      </div>
    </header>
  );
};

export default Header;
