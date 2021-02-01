import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout'
import axios from 'axios';
import Post from '../components/Post';
import { IPost } from '../typescript/posts';

type homeProps = {
  listOfPosts: Array<IPost>
}

export default function Home({ listOfPosts }: homeProps) {

  return (
    <MainLayout>
      <h1 className={styles.h1}>Last five posts:</h1>
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

export async function getServerSideProps() {

  const listOfPosts: Array<IPost> = await axios.get('https://simple-blog-api.crew.red/posts')
    .then((res) => res.data);

  const reversed = listOfPosts.splice(-5).reverse();

  return {
    props: { listOfPosts: reversed },
  }
}
