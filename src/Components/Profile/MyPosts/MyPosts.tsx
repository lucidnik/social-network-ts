import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {id: 1, message: 'sup bruv'},
    {id: 2, message: 'Alex Jones'},
    {id: 3, message: 'Media'},
    {id: 4, message: 'Naruto'},
];

let postsElements = posts.map(elements => <Post id-={elements.id} message={elements.message}/>);

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea className={s.textArea}/>
                <button className={s.addPostBtn}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
