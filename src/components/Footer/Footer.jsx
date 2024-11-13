import "./Footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="facebook_icon" />
        <img src={twitter_icon} alt="twitter_icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        <img src={youtube} alt="youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help</li>
        <li>Contact</li>
        <li>Audio Description</li>
        <li>Help</li>
        <li>Contact</li>
        <li>Audio Description</li>
        <li>Help</li>
        <li>Contact</li>
        <li>Audio Description</li>
        <li>Help</li>
        <li>Contact</li>
      </ul>
      <p className="copyright-text">© 2024 Study by Meep. All rights reserved.</p>
    </div>
  );
};

export default Footer;
