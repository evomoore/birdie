import ItemCarousel from '../../components/ItemCarousel'
import Footer from '../../components/Footer'
import PostList from '../../components/PostList'
import fetch from 'isomorphic-unfetch'

const Destination = ({ posts, destinations }) => {

  return (
    <>
      <PostList posts={posts} destinations={destinations} />
      <ItemCarousel />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context)  {
  const { API_URL } = process.env

  let post_data;

  const res_destination = await fetch(`${API_URL}/destinations?Slug=${context.params.slug}`)
  const destination_data = await res_destination.json()

  const res_2 = await fetch(`${API_URL}/destinations`)
  const destinations_data = await res_2.json()

  if (destination_data[0].Level == 1) {

    const res_posts = await fetch(`${API_URL}/posts?Destination.parent_destination=${destination_data[0].id}`)
    post_data = await res_posts.json()

  } else {

    const res_posts = await fetch(`${API_URL}/posts?Destination.id=${destination_data[0].id}`)
    post_data = await res_posts.json()

  }

  return {
    props: {
      posts: post_data,
      destinations: destinations_data
    }
  }
}

export default Destination
