import axios from "axios";
import MainLayout from "../../components/layouts/MainLayout";
import Post from '../../components/Post'

interface Post {
    id: number,
    title: string,
    body: string,
    creator?: string,
    date?: string,
}

export default function postId({ post }) {
    return (
        <MainLayout>
            <Post post={post}/>
        </MainLayout>
    )
}

export async function getStaticPaths() {

    const listOfPosts: Array<Post> = await axios.get('https://simple-blog-api.crew.red/posts')
        .then((res) => res.data);

    const paths = listOfPosts.map((post) => ({
        params: { postId: post.id.toString() },
    }))

    return {
        paths: paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post: Post = await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}`)
        .then((res) => res.data);

    return { props: { post } }
}