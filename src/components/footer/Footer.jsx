import "./footer.css";

const Footer = () => {

const year = new Date().getFullYear()


  return (
    <footer className='footer'>
      <p>&copy; {year} Edusity. All rights reserved</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
