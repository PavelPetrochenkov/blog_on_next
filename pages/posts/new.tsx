import axios from "axios";
import MainLayout from "../../components/layouts/MainLayout";
import { ChangeEvent, MouseEvent, useState } from 'react';
import style from '../../styles/new.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { addPost, getPosts } from "../../redux/actions/postsAction";

function createPost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch()

    const addNewPost = (e:MouseEvent) => {
       axios.post('https://simple-blog-api.crew.red/posts',
        JSON.stringify({title, body}), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>dispatch(addPost(res.data)))
        e.preventDefault();
        setTitle('');
        setBody('');
    }

    const handleChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const handleChangeBody = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.currentTarget.value);
    }

    return (
        <MainLayout>
            <form>
            <h1>Create Post:</h1>
                <div><span className={style.span}>Title: </span><input value={title} onChange={handleChangeTitle} className={style.input} required placeholder='Title...'/></div>
                <div><span className={style.span}>Text: </span><textarea value={body} onChange={handleChangeBody} className={style.textarea} required placeholder='Text...'/></div>
                <button onClick={addNewPost} className={style.btn}>Send</button>
            </form>
        </MainLayout>
    )
}

export default createPost;
