import Logo from "./assets/Logo.png";
import "./App.css";
import Whatsapp from "./assets/Whatsapp.png";
function Footer() {
  const footerLinks = [
    "Copyright Policy", "Terms & Conditions", "Tenders", "About Us", "FAQs", "Zoo Map", "Downloads"
  ];
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-icon">
          <img src={Logo} height="32" width="32" alt="Zoo Logo" />
        </div>
        <p className="footer-logo">Nehru Zoological Park</p>
        <p className="footer-addr">
          Near Mir Alam Tank, NH 44, Bahadurpura, Hyderabad – 500 004, Telangana, India.<br />
          <span className="footer-ph">Ph: 040 2447 7355, 040 2447 3253</span>
        </p>
      </div>
      <div className="footer-links-row">
        {footerLinks.map((l) => (
          <a key={l} href="#">{l}</a>
        ))}
      </div>
      <div className="footer-contact-row">
        <div className="footer-contact-item">
          <div className="icon">✉</div>
          <div>
            <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>Email</div>
            <div>ezphydteletatazoo@gmail.com</div>
          </div>
        </div>
        <div className="footer-contact-item">
          <div className="icon">📞</div>
          <div>
            <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>Call</div>
            <div>040 2447 7355</div>
          </div>
        </div>
        <div className="footer-contact-item">
          <div className="icon">
            <img src={Whatsapp} height="24" width="24" alt="WhatsApp" />
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>WhatsApp</div>
            <div>9281007836</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2024 Nehru Zoological Park 1963–2024 AND FRIENDS OF NZP. All rights reserved.
          Designed by Nehru Zoological Park.
        </p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;