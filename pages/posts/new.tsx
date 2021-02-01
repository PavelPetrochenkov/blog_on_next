import axios from "axios";
import MainLayout from "../../components/layouts/MainLayout";
import { ChangeEvent, useState } from 'react';

interface INewPost{
    body:string,
    title:string
}

function createPost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (post:INewPost) => {
       axios.post('https://simple-blog-api.crew.red/posts',
        JSON.stringify(post), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setTitle('');
        setBody('');
    }

    const handleChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const handleChangeBody = (e:ChangeEvent<HTMLInputElement>) => {
        setBody(e.currentTarget.value);
    }

    return (
        <MainLayout>
            <h1>Create Post</h1>
                <div><span>Title: </span><input value={title} onChange={handleChangeTitle}/></div>
                <div><span>Text: </span><input value={body} onChange={handleChangeBody}/></div>
                <button onClick={()=>addNewPost({title, body})}>Send</button>
            
        </MainLayout>
    )
}

export default createPost;
