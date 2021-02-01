import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout'
import axios from 'axios';
import Link from 'next/link';
import { setLastPost } from '../redux/actions/postsAction';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Post from '../components/Post';


interface Post {
  id: number,
  title: string,
  body: string,
  creator?: string,
  date?: string,
}

export default function Home({ listOfPosts }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLastPost(listOfPosts.slice(0, 1)))
  }, [])

  return (
    <MainLayout>
      <h1 className={styles.h1}>List of Posts</h1>
      <ul className={styles.list}>
        {listOfPosts.map((post) =>
          <li className={styles.post} key={`post_${post.id}`}>
            <Post post={post} />
          </li>
        )}
      </ul>
    </MainLayout>
  )
}

export async function getStaticProps() {

  const listOfPosts: Array<Post> = await axios.get('https://simple-blog-api.crew.red/posts')
    .then((res) => res.data);

  const reversed = listOfPosts.reverse();

  return {
    props: { listOfPosts: reversed },
  }
}
