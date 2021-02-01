import { IPost, IAction, IActionP } from './../../typescript/posts';

export const setAllPosts = (obj:IPost[]):IActionP=> ({
    type:'SET_POSTS',
    payload:obj
});

export const addPost = (obj:IPost):IActionP=> ({
    type:'ADD_POST',
    payload:obj
});

export const getPosts = ():IAction => ({
    type:'GET_POSTS'
});

export const  errorPosts= ():IAction=> ({
    type:'ERROR_POSTS'
});