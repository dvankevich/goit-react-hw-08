import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const images = [
    // Додайте тут ваші URL-адреси зображень
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=Screenshot+1',
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=Screenshot+2',
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=Screenshot+3',
  ];

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
