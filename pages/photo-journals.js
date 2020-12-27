import ItemCarousel from '../components/ItemCarousel'
import Footer from '../components/Footer'
import PostList from '../components/PostList'
import fetch from 'isomorphic-unfetch'

const PhotoJournals = ({ posts, destinations }) => {

  return (
    <>
      <PostList posts={posts} destinations={destinations} />
      <ItemCarousel />
      <Footer />
    </>
  )
}

export async function getServerSideProps()  {
  const { API_URL } = process.env

  const res_1 = await fetch(`${API_URL}/posts?Type=Journal`)
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

export default PhotoJournals
