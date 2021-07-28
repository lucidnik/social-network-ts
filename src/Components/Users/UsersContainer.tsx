import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, usersType} from "../../redux/UsersReducer";
import {RootStateType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";
import {Users} from "./UsersClass";

type MapStatePropsType = {
    users: usersType[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users:state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);