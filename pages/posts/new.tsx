import axios from "axios";
import MainLayout from "../../components/layouts/MainLayout";

interface INewPost{
    body:string,
    title:string
}

function createPost() {

    const addNewPost = (post:INewPost) => {
        console.log(JSON.stringify(post))
       axios.post('https://simple-blog-api.crew.red/posts',
        JSON.stringify(post), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <MainLayout>
            <h1>Create Post</h1>
                <div><span>Title: </span><input/></div>
                <div><span>Text: </span><input/></div>
                <button onClick={()=>addNewPost({title:'Test data', body:'Test body'})}>Send</button>
            
        </MainLayout>
    )
}

export default createPost;
