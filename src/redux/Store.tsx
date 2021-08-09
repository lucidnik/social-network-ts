import {addPostAC, ProfilePageType, profileReducer, updateNewPostAC} from "./ProfileReducer";
import {addMessage, DialogsPageType, dialogsReducer, updateNewMessageText} from "./DialogsReducer";

// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// export type StoreType = {
//     _state: RootStateType | any
//     rerenderEntireTree: (state: RootStateType) => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionTypes) => void
// }
//
// export type ActionTypes =
//     ReturnType<typeof addPostAC>
//     | ReturnType<typeof updateNewPostAC>
//     | ReturnType<typeof addMessageAC>
//     | ReturnType<typeof updateNewMessageAC>
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: 1, message: 'James Bond', likesCount: 53},
//                 {id: 2, message: 'Alex Jones', likesCount: 16},
//                 {id: 3, message: 'Media', likesCount: 33},
//                 {id: 4, message: 'Naruto', likesCount: 84},
//             ]
//         },
//         dialogsPage: {
//             newMessageText: '',
//             dialogs: [
//                 {id: 1, name: 'Nikita'},
//                 {id: 2, name: 'Valera'},
//                 {id: 3, name: 'Andrei'},
//                 {id: 4, name: 'Viktor'},
//                 {id: 5, name: 'Angelo'}
//             ],
//             messages: [
//                 {message: 'Sup', likesCount: 1},
//                 {message: 'Yo', likesCount: 1},
//                 {message: 'Hey', likesCount: 1},
//                 {message: 'Hi', likesCount: 1},
//                 {message: 'Howdy', likesCount: 1},
//             ]
//         }
//     },
//
//     rerenderEntireTree(state: RootStateType) {
//     },
//
//     subscribe(observer: () => void) {
//         this.rerenderEntireTree = observer;
//     },
//
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this.rerenderEntireTree(this._state)
//     }
// };
//
// export default store;
