import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/hero1.jpg';
import hero2 from './../assets/scott-graham-5fNmWej4tAA-unsplash.jpg';
import hero3 from './../assets/headway-5QgIuuBxKwM-unsplash.jpg';
const Hero = ()=> { 
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ayo Bisnis Bersama kami</h3>
          <p>Bangun Skill anda Dan Bergabung Bersama Kami!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
        className="d-block w-100"
        src={hero2}
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Ayo Bisnis Bersama kami</h3>
        <p>Bangun Skill anda Dan Bergabung Bersama Kami!!</p>
        </Carousel.Caption>

        </Carousel.Item>
            
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Ayo Bisnis Bersama kami</h3>
          <p>Bangun Skill anda Dan Bergabung Bersama Kami!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src={hero2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Ayo Bisnis Bersama kami</h3>
          <p>Bangun Skill anda Dan Bergabung Bersama Kami!!</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      
    </Carousel>

    
  );
}


export default Hero;