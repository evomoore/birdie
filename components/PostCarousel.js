import Carousel from "react-multi-carousel";
import Link from 'next/link';

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

const PostCarousel = ({ post_type, posts }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
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
      <h3 className="carousel-title">more {post_type}</h3>
      <h3 className="carousel-shop">see all</h3>
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
      {
        posts.map(post => {
          return (
            <div className="carousel-slide">
              <Link href={'/../post/' + post.Slug} as={`/../post/${post.Slug}`}>
                <a>
                  <img src={post.Heroes.Portrait.formats.small.url} />
                  <p className="post-title">{post.Title}</p>
                </a>
              </Link>
              <p className="post-blurb">{post.Tagline}</p>
            </div>
          )
        })
      }
      </Carousel>
    </>
  )
}

export default PostCarousel
