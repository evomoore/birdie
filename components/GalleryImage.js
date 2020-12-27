import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react'

const GalleryImage = ({ image, orientation, caption, hero, windowWidth }) => {

  const [ captionVisibility, setCaptionVisibility ] = useState('hidden');

  if (orientation == 'Portrait') {
    return(
      <Col className="gallery-image" sm="6" md="6" lg="6" onMouseEnter={() => setCaptionVisibility('visible')} onMouseLeave={() => setCaptionVisibility('hidden')}>
        <img src={image} />
        {caption ? <div className="image-caption" style={{ visibility: captionVisibility }}><p>{caption}</p></div> : ''}
      </Col>
    )
  } else {
    return (
      <Col className="gallery-image" sm="12" md="12" lg="12" onMouseEnter={() => setCaptionVisibility('visible')} onMouseLeave={() => setCaptionVisibility('hidden')}>
        <img  style={(hero && (windowWidth < 576)) ? { display: 'none' } : {}} src={image} />
        {caption ? <div className="image-caption" style={{ visibility: captionVisibility }}><p>{caption}</p></div> : ''}
      </Col>
    )
  }

}

export default GalleryImage
