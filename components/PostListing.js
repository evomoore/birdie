import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const PostListing = ({ post, parent_destination, orientation }) => {
  let widths;
  let hero;
  if (orientation == 'Portrait') {
    widths = {
      sm: 6,
      md: 4,
      lg: 3
    }
    hero = post.Heroes.Portrait.formats.medium.url
  } else {
    widths = {
      sm: 12,
      md: 8,
      lg: 6
    };
    hero = post.Heroes.Landscape.formats.medium.url
  }
  return (
    <Col className="post-listing" sm={widths.sm} md={widths.md} lg={widths.lg}>
      <Link href={'/post/' + post.Slug} as={`/post/${post.Slug}`}>
        <a>
          <img src={hero} width="100%" />
        </a>
      </Link>
      <p className="post-tag">
        {(post.Type == 'Journal') ? 'Photo Journal' : 'Itinerary'} // {parent_destination ? post.Destination?.Name + ', ' + parent_destination?.Name : post.Destination?.Name}
      </p>
      <Link href={'/post/' + post.Slug} as={`/post/${post.Slug}`}>
        <a>
          <p className="post-title">{post.Title}</p>
        </a>
      </Link>
      <p className="post-blurb">{post.Tagline}</p>
    </Col>
  )
}

export default PostListing
