import axios from "axios";
import { GetStaticPaths } from "next";
import MainLayout from "../../components/layouts/MainLayout";
import Post from '../../components/Post';
import { IPost } from "../../typescript/posts";

type postIdProps = {
    post: IPost
}

export default function postId({ post }: postIdProps) {
    return (
        <MainLayout>
            <h1>Post #{post.id}</h1>
            <Post post={post} />
        </MainLayout>
    )
}

export async function getStaticPaths(context: GetStaticPaths) {

    const listOfPosts: Array<IPost> = await axios.get('https://simple-blog-api.crew.red/posts')
        .then((res) => res.data);

    const paths = listOfPosts.map((post) => ({
        params: { postId: post.id.toString() },
    }))

    return {
        paths: paths,
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const post: IPost = await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}`)
        .then((res) => res.data);
    return {
        props: { post },
        revalidate: 1,
    }
}