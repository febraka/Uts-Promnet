import React from 'react';
import './Footer.css';
import wa from '../asset/wa.png';
import ig from '../asset/ig.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Navigate</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h2>Contact</h2>
        <ul>
          <p className='isi'>Email: sablenkthea@gmail.com</p>
          <p className='isi'>Telepon: 0823-1032-6187 (Febra) </p>
          <p className='isi'>Indonesia</p>
        </ul>
      </div>
      
      <div className="footer-section">
        <h2>Social</h2>
        <ul className="social-icons">
          <li>
            <a href="https://api.whatsapp.com/send?phone=6282310326187">
              <img src={wa} alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/febraka_/">
              <img src={ig} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023 Febra Karunia Akbar</p>
      </div>
    </footer>
  );
}

export default Footer;