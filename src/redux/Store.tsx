export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
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

export type StoreType = {
    _state: RootStateType | any
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>

let store: StoreType = {
    _state: {
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
            newMessageText: '',
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
    },

    rerenderEntireTree() {
    },

    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree();
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree();
        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage: MessagesType = {
                id: 5,
                message: action.newMessageText,
                likesCount: 5
            };
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this.rerenderEntireTree()
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this.rerenderEntireTree()
        }
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

export const addMessageAC = (newMessageText: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessageText: newMessageText
    } as const;
};

export const updateNewMessageAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: newText
    } as const;
};

export default store;
