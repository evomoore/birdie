import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostListing from '../components/PostListing'
import ItemCarousel from '../components/ItemCarousel'
import Footer from '../components/Footer'
import fetch from 'isomorphic-unfetch'

const Home = ({ posts, destinations }) => {

  let postCounter = 0;
  return (
    <>
      <Container className="posts-container" fluid>
        <Row>
          {
            posts.map(post => {

              let parent_destination = false;

              if (post.Destination?.parent_destination) {
                parent_destination = destinations.filter(function id(destination) {
                  return destination.id == post.Destination.parent_destination;
                })[0]
              }

              switch(postCounter) {
                case 0:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Landscape'} />
                  )
                  break;
                case 1:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 2:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 3:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 4:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 5:
                  postCounter = postCounter + 1;
                  return (
                    <>
                      <PostListing post={post} parent_destination={parent_destination} orientation={'Landscape'} />
                      <Col sm="12" md="12" lg="12" className="carousel-container">
                        <ItemCarousel />
                      </Col>
                    </>
                  )
                  break;
                case 6:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 7:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Portrait'} />
                  )
                  break;
                case 8:
                  postCounter = postCounter + 1;
                  return (
                    <PostListing post={post} parent_destination={parent_destination} orientation={'Landscape'} />
                  )
                  break;
                default:
                  // code block
              }
            })
          }
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps()  {
  const { API_URL } = process.env

  const res_1 = await fetch(`${API_URL}/posts`)
  const post_data = await res_1.json()

  const res_2 = await fetch(`${API_URL}/destinations`)
  const destinations_data = await res_2.json()

  return {
    props: {
      posts: post_data,
      destinations: destinations_data
    }
  }
}

export default Home
