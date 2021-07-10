import {ActionTypes, PostsType, ProfilePageType} from "./Store";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

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
