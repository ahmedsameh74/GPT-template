import './Footer.css'
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="Footer section">
      <div className="top">
        <h2 className="gr-color title">
          Do you want to step in to the future before others
        </h2>
        <div className="sec-btn">Request Early Access</div>
      </div>
      <div className="bottom">
        <div className="head">
          <div className="col">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <p className='p'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="col">
            <p className='foo-title'>Links</p>
            <div className="list">
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="col">
            <p className='foo-title'>Company</p>
            <div className="list">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="col">
            <p className='foo-title'>Get in touch</p>
            <div className="list">
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
        <div className="tail">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer