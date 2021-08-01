import {ActionTypes} from "./ReduxStore";

export type usersType = {
    id: number
    name: string
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

let initialState: UsersPageType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1
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
                users: [...action.users]
            };

        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.selectedPage
            }

        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

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

export const setCurrentPageAC = (selectedPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE', selectedPage
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return{
        type: 'SET_TOTAL_USERS_COUNT', totalCount
    } as const
}