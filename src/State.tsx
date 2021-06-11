type DialogsPageType = {
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
}

type ProfilePageType = {
    posts: PostsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'James Bond'},
            {id: 2, message: 'Alex Jones'},
            {id: 3, message: 'Media'},
            {id: 4, message: 'Naruto'},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 1, name: 'Valera'},
            {id: 1, name: 'Andrei'},
            {id: 1, name: 'Viktor'},
            {id: 1, name: 'Angelo'}
        ],
        messages: [
            {message: 'Sup', likesCount: 1,},
            {message: 'Yo', likesCount: 1,},
            {message: 'Hey', likesCount: 1,},
            {message: 'Hi', likesCount: 1,},
            {message: 'Howdy', likesCount: 1,},
        ]
    }
};