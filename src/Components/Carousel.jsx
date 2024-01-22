import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (

    <Container className='d-flex justify-content-center'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="  d-flex justify-content-center "
          src="https://img.freepik.com/premium-photo/sleek-glass-skyscrapers-vibrant-urban-cityscape-generative-ai_971991-2178.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Welcome to Our Store</h5>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-70 d-flex justify-content-center"
          src="https://img.freepik.com/premium-photo/skyscraper-glass-facades-bright-sunny-day-with-sunbeams-blue-sky_882361-1706.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Choose and Proceed Safely</h5>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex justify-content-center"
          src="https://t3.ftcdn.net/jpg/02/55/48/40/360_F_255484096_xURezE9f1pr9t8KowXbaoaedumux4vis.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Nice To Meet You</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default MyCarousel;