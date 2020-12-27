import Carousel from "react-multi-carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="carousel-button-right" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="carousel-button-left" onClick={() => onClick()} />;
};

const ItemCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <Container className="item-carousel-container" fluid>
        <Row>
          <Col sm="12" md="12" lg="12">
            <h3 className="carousel-title">birdie essentials</h3>
            <h3 className="carousel-shop">shop all</h3>
            <div className="clear"></div>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
              <div className="carousel-slide">
                <img src="https://res.cloudinary.com/phonetag/image/upload/v1607914948/medium_London19_1193_14588d34e9.jpg" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ItemCarousel
