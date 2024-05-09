import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    } else if (tx === -50) {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else if (tx === 0) {
      tx = -50;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img
        src={back_icon}
        alt=''
        className='back-btn'
        onClick={slideBackward}
      />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='user' />
                <div>
                  <h3>Jenifer Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis quibusdam eos eveniet, maiores ab voluptates!
                Recusandae, ex amet adipisci aliquid dolor possimus quam cumque
                natus facilis aut, perspiciatis, consequatur officia.
              </p>
            </div>
          </li>
          {/* slide 2 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='user' />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis quibusdam eos eveniet, maiores ab voluptates!
                Recusandae, ex amet adipisci aliquid dolor possimus quam cumque
                natus facilis aut, perspiciatis, consequatur officia.
              </p>
            </div>
          </li>
          {/* slide 3 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='user' />
                <div>
                  <h3>Monica Doe</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis quibusdam eos eveniet, maiores ab voluptates!
                Recusandae, ex amet adipisci aliquid dolor possimus quam cumque
                natus facilis aut, perspiciatis, consequatur officia.
              </p>
            </div>
          </li>
          {/* slide 4 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='user' />
                <div>
                  <h3>Ros Beliche</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis quibusdam eos eveniet, maiores ab voluptates!
                Recusandae, ex amet adipisci aliquid dolor possimus quam cumque
                natus facilis aut, perspiciatis, consequatur officia.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
