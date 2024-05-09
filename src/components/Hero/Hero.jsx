import "./hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          pariatur quo aut sint! Distinctio perferendis cupiditate itaque quasi
          nam similique id suscipit doloribus exercitationem nobis!
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="dark arrow" /></button>
      </div>
    </div>
  );
};

export default Hero;
