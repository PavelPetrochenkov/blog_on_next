import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout'
import { GetStaticProps } from 'next'
import axios from 'axios';
import Link from 'next/link';

interface Post{
  id:number,
  title:string,
  body:string,
  creator?:string,
  date?:string,
}

export default function Home({listOfPosts}) {
  return (
   <MainLayout>
     <h1 className={styles.h1}>List of Posts</h1>
     <ul className={styles.list}>
       {listOfPosts.map((post)=>
         <li className={styles.post}><Link href={`/posts/${post.id}`}><span className={styles.titlePost}>{post.title}</span></Link><p className={styles.bodyPost}>{post.body}</p></li>
       )}
     </ul>
   </MainLayout>
  )
}

export async function getStaticProps(context:GetStaticProps) {
  
  const listOfPosts : Array<Post> = await axios.get('https://simple-blog-api.crew.red/posts')
  .then((res)=>res.data);
  return {
    props: {listOfPosts}, 
  }
}