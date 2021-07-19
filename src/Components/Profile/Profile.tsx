import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/ProfileReducer";
import {ActionTypes} from "../../redux/ReduxStore";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void

}


const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;

