import {rerenderEntireTree} from "../render";

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    message: string
    likesCount: number
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: 'James Bond', likesCount: 53},
            {id: 2, message: 'Alex Jones', likesCount: 16},
            {id: 3, message: 'Media', likesCount: 33},
            {id: 4, message: 'Naruto', likesCount: 84},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Andrei'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Angelo'}
        ],
        messages: [
            {message: 'Sup', likesCount: 1},
            {message: 'Yo', likesCount: 1},
            {message: 'Hey', likesCount: 1},
            {message: 'Hi', likesCount: 1},
            {message: 'Howdy', likesCount: 1},
        ]
    }
};

export const addPost = (postText: string) => {
    let newPost: PostsType = {
        id: 5,
        message: postText,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''

    rerenderEntireTree(state);
};

export const changeText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

};