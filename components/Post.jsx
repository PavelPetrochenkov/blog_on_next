import style from '../styles/Post.module.css'
import Link from 'next/link';

function Post({post}) {
    return (
       <div className={style.content}>
       <Link href={`/posts/${post.id}`}>
        <span className={style.titlePost}>Title: {post.title}</span></Link>
        <hr className={style.hr}/>
        <p className={style.bodyPost}>{post.body}</p>
       </div>
    )
}

export default Post
