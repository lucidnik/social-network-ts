import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea className={s.textArea}/>
                <button className={s.addPostBtn}>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message="Sup"/>
                <Post message="How is it going"/>
                <Post message="Checking how to use props"/>
                <Post message="What are props anyway?"/>
            </div>
        </div>
    );
};

export default MyPosts
