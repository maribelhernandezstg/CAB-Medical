import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="social-media-links">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span></a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> <span>YouTube</span></a></li>
          <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /> <span>TikTok</span></a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> <span>LinkedIn</span></a></li>
        </ul>
      </div>
      <h5>Consultorios</h5>
      <div className="consultorios-info">
        <div className='title'>
        
     </div>
          <section className='info1'>
            <h6>Centro Médico Vitalis</h6>
            <p>Clínica Altavida, en el Boulevard Solaris 456, Ciudad Lúmina.</p>
          </section>
          <section className='info2'>
            <h6>Clínica de Especialidades Sanare</h6>
            <p>Avenida de los Sauces 112, Colonia San Cristóbal, Ciudad Jardín, Estado de Monteluna.</p>
          </section>
        </div>
    </footer>
  );
}

export default Footer;
