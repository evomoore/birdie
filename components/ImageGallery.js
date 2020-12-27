import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react'
import useDimensions from "react-cool-dimensions";
import GalleryImage from '../components/GalleryImage'

const ImageGallery = ({ post, windowWidth, setImagesHeight, hero }) => {
  const { ref, width, height, entry, unobserve, observe } = useDimensions({
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
      setImagesHeight(height)
    },
  });

  const [captionVisibility, setCaptionVisibility] = useState('hidden')

  let key_counter = 0;

  return (
    <Col ref={ref} className="post-images" sm="8" med="8" lg="8">
      <Col className="image-gallery" sm="12" med="12" lg="12">
        <Container fluid>
          <Row>
            {(windowWidth > 576) ? <GalleryImage key={key_counter} image={hero} orientation={'Landscape'} caption={post.Heroes.Landscape?.caption} /> : ''}
            {
              post.Images.Image.map(image => {
                key_counter++
                return (
                  <GalleryImage key={key_counter} image={image.Image.formats.medium.url} orientation={image.Orientation} caption={image.Caption} />
                )
              })
            }
          </Row>
        </Container>
      </Col>
    </Col>
  )
}

export default ImageGallery
