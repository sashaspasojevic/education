import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {

 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58ba17a8-e5d9-4d35-b5ac-c6b08df67c69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message
          <img src={msg_icon} alt='an envelope' />
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ab
          consectetur nisi quae eaque amet, eius reprehenderit vitae, omnis
          nesciunt deleniti non corrupti dolorum impedit odit iure beatae ut
          distinctio?
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt='mail_icon' />
            Contact@GretStack.dev
          </li>
          <li>
            <img src={phone_icon} alt='phone_icon' />* 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt='location_icon' />* 123-456-7890
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" placeholder="Enter you name" required id="name"/>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" name="phone" placeholder="entoru mobile number"  id="phone"/>
          <label htmlFor="messages">Write your messages here</label>
          <textarea name="messages" id="messages" placeholder="Enter your message" rows="6" required></textarea>
          <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="white arrow" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
