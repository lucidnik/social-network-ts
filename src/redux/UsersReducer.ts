import {ActionTypes} from "./ReduxStore";

export type usersType = {
    id: number
    name: string
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: usersType[]
}

let initialState: UsersPageType = {
    users: []
};

export const usersReducer = (state = initialState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };

        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;


    }
};

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const;
};

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const;
};

export const setUsersAC = (users: usersType[]) => {
    return {
        type: 'SET_USERS', users

    } as const;
};