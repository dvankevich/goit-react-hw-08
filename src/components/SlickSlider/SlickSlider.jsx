import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scr01 from '../../img/s-01-min.png';
import scr02 from '../../img/s-02-min.png';
import scr03 from '../../img/s-03-min.png';
import scr04 from '../../img/s-04-min.png';
import scr05 from '../../img/s-05-min.png';

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const images = [scr01, scr02, scr03, scr04, scr05];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;
