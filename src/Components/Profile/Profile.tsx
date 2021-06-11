import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../State";

type PropsType = {
    posts: PostsType[]
}


const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;

