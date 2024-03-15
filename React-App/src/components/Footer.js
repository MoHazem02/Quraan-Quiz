const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer__author">
        <span className="footer-link"><a href="https://github.com/MoHazem02/Quraan-Quiz" target="_blank" rel="noreferrer">© Quraan Quiz</a></span><span className="arrow">🔻</span></p>
        <p className="footer__bio">Made with <span className="heart">
          <img
        className="heart__img"
        src="./assets/images/heart-svgrepo-com.svg"
        alt="Icon of github"
      />
        </span> by 
          <span className="footer-link">
            <a href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/" target="_blank" rel="noreferrer">Mahmoud Mansy</a>
          </span> 
          & 
          <span className="footer-link">
            <a href="https://www.linkedin.com/in/mohamed-hazem01/" target="_blank" rel="noreferrer">Mohamed Hazem</a>
          </span>
        </p>
      </div>
      <div className="contact__socials">
        <a
          href="https://github.com/MoHazem02/Quraan-Quiz"
          className="contact__social"
          target="_blank" rel="noreferrer"
        >
          <img
            className="contact__img"
            src="./assets/images/github.svg"
            alt="Icon of github"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          className="contact__social"
          target="_blank" rel="noreferrer"
        >
          <img
            className="contact__img-2"
            src="./assets/images/linkedin-linked-in-svgrepo-com 1.png"
            alt="Icon of linkedin"
            />
        </a>
        <a
          href="https://www.linkedin.com"
          className="contact__social"
          target="_blank" rel="noreferrer"
          >
          <img
            className="contact__img-2"
            src="./assets/images/figma-svgrepo-com 1.png"
            alt="Icon of linkedin"
          />
        </a>
      </div>
</footer>
  );
};

export default Footer;
