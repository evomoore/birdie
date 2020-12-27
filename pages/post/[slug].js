import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef, useEffect } from 'react'
import ImageGallery from '../../components/ImageGallery'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import useDimensions from "react-cool-dimensions";
import useWindowDimensions from '../../functions/useWindowDimensions'
import Footer from '../../components/Footer'
import PostCarousel from '../../components/PostCarousel'
import GalleryImage from '../../components/GalleryImage'

const Post = ({ post, carousel_data, hero }) => {
  const router = useRouter()
  const { slug } = router.query
  const [imagesHeight, setImagesHeight] = useState(null)
  const [bodyHeight, setBodyHeight] = useState(null)
  const [bodyPosition, setBodyPosition] = useState('fixed !important')
  const [bodyTop, setBodyTop] = useState(null)

  const [textBodyTop, setTextBodyTop] = useState({
    top: 100
  })

  const { ref, width, height, entry, unobserve, observe } = useDimensions({
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
    },
  });

  const { windowHeight, windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (windowWidth < 576) {
      setBodyPosition('static !important')
    } else {
      setBodyPosition('fixed !important')
    }
  }, [windowWidth])

  function getBodyTop () {
    if (windowWidth < 576) {
      return ({
        top: 0,
        paddingRight: 15
      })
    } else {
      if ((-(textBodyTop + 30) + windowHeight) > height) {
        if ((-(textBodyTop + 30) + windowHeight) > imagesHeight) {
          return ({
            top: -(height - (imagesHeight + textBodyTop)),
            paddingRight: 50
          })
        } else {
          return ({
            top: -(height - windowHeight),
            paddingRight: 50
          })
        }
      } else {
        return ({
          top: textBodyTop + 30,
          paddingRight: 50
        })
      }
    }
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setTextBodyTop(currPos.y)
    },
    [textBodyTop]
  )

  return (
    <>
      <Container className="post-container" fluid>
        <Row>
          <Col ref={ref} className="post-body" style={getBodyTop()} sm="4" med="4" lg="4">
            <p className="post-title">{post.Title}</p>
            <p className="post-blurb">{post.Tagline}</p>
            {
              console.log("Hero: " + hero)
            }
            {
              (windowWidth < 576) ? <GalleryImage image={hero} orientation={'Landscape'} caption={post.Heroes.Landscape.caption} /> : ''
            }
            <div className="post-text" dangerouslySetInnerHTML={{__html:post.Body}}>
            </div>
          </Col>
          <style jsx global>{`
            .post-body {
              position: ${bodyPosition};
            }
          `}</style>
          <Col sm="4" med="4" lg="4">
          </Col>
          <ImageGallery post={post} windowWidth={windowWidth} setImagesHeight={setImagesHeight} hero={hero} />
          <Col sm="12" md="12" lg="12" className="carousel-container">
            <PostCarousel post_type={(post.Type == 'Journal') ? 'photo journals' : 'itineraries'} posts={carousel_data} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context)  {

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/posts?Slug=${context.params.slug}`)
  const post_data = await res.json()

  const carousel_res = await fetch(`${API_URL}/posts?Type=${post_data[0].Type}`)
  const carousel_data = await carousel_res.json()

  console.log("Carousel Data")
  console.log(carousel_data)

  return {
    props: {
      post: post_data[0],
      carousel_data: carousel_data,
      hero: post_data[0].Heroes.Landscape.formats.large.url
    }
  }
}

export default Post
