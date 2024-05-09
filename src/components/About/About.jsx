import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='students' className='about-img' />
        <img src={play_icon} alt='students' className='play-icon' onClick={() => {
          setPlayState(true)
        }}/>
      </div>

      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus consectetur hic rerum dolores natus placeat ab. Soluta architecto temporibus nostrum, esse dolor, labore nisi assumenda necessitatibus adipisci velit accusantium!</p>
        <p>Minima odit saepe sit fugit reiciendis obcaecati hic, ut, soluta sequi suscipit earum illo veniam nemo tempora voluptatibus quibusdam natus delectus laudantium quisquam excepturi asperiores, deserunt possimus eligendi! Error, alias!</p>
        <p>Sequi officiis corporis magnam est dicta ea sapiente provident, nostrum, fugit aperiam error ullam iure nihil quas unde neque deleniti. Dicta quis cumque eveniet corporis aspernatur totam maiores velit sunt?</p>
      </div>
    </div>
  );
};

export default About;
