import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostListing from '../components/PostListing'

const PostList = ({ posts, destinations }) => {

  let postCounter = 0;

  return (
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

            if ((postCounter % 5) == 0) {
              console.log("PostCounter Remainder")
              console.log((postCounter % 3))
              postCounter++
              return (
                <PostListing key={postCounter} post={post} parent_destination={parent_destination} orientation={'Landscape'} />
              )
            } else {
              postCounter++
              return (
                <PostListing key={postCounter} post={post} parent_destination={parent_destination} orientation={'Portrait'} />
              )
            }
          })
        }
      </Row>
    </Container>
  )
}

export default PostList
