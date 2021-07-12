import {ActionTypes} from "./ReduxStore";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

let initState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'James Bond', likesCount: 53},
        {id: 2, message: 'Alex Jones', likesCount: 16},
        {id: 3, message: 'Media', likesCount: 33},
        {id: 4, message: 'Naruto', likesCount: 84},
    ]
}

export const profileReducer = (state: ProfilePageType = initState , action: ActionTypes) => {

    switch (action.type) {
        case 'ADD_POST':
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText;
            break;
        default:
            return  state
    }

    return state;
};

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    } as const;
};
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const;
};