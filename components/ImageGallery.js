import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react'
import useDimensions from "react-cool-dimensions";

const ImageGallery = ({ post, windowWidth, setImagesHeight }) => {
  const { ref, width, height, entry, unobserve, observe } = useDimensions({
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
      setImagesHeight(height)
    },
  });

  return (
    <Col ref={ref} className="post-images" sm="7" med="7" lg="7">
      <Col className="image-gallery" sm="12" med="12" lg="12">
        <Container fluid>
          <Row>
            {(windowWidth > 576) ? <Col className="gallery-image" sm="12" md="12" lg="12"><img src={post.Heroes.Landscape.formats.medium.url} /></Col> : ''}
            {
              post.Images.Image.map(image => {
                if (image.Orientation == 'Portrait') {
                  return(
                    <Col className="gallery-image" sm="6" md="6" lg="6">
                      <img src={image.Image?.formats.medium.url} />
                    </Col>
                  )
                } else {
                  return (
                    <Col className="gallery-image" sm="12" md="12" lg="12">
                      <img src={image.Image?.formats.medium.url} />
                    </Col>
                  )
                }
              })
            }
          </Row>
        </Container>
      </Col>
    </Col>
  )
}

export default ImageGallery
