import {ActionTypes} from "./ReduxStore";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: any
}

let initState = {
    newPostText: '',
    posts: [],
    profile: null
};

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 1}],
                newPostText: ''
            };
        case 'UPDATE_NEW_POST_TEXT':
            return {
                ...state, newPostText: action.newText
            };

        case "SET_USER_PROFILE":
            return  {...state, profile: action.profile}

        default:
            return state;
    }
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

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET_USER_PROFILE', profile
    } as const;
};