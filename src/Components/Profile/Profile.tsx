import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
                     alt=""/>
            </div>
            <div>ava</div>
            <MyPosts/>
        </div>
    );
};

export default Profile