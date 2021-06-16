import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/State";

type PropsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
    newPostText: string
    changeText: (newText: string) => void
}


const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} changeText={props.changeText} />
        </div>
    );
};

export default Profile;

