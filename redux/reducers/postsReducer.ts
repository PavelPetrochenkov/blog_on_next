import { IPost } from './../../typescript/posts';

type initState = {
    posts: IPost[];
    error: boolean;
};

const initialState: initState = {
    posts: [],
    error: false,
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload,
                error: false,
            };
        }
        case 'ADD_POST': {
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        }
        case 'ERROR_POSTS': {
            return {
                ...state,
                posts: [],
                error: true,
            };
        }
    }
    return state;
}

export default postsReducer;
