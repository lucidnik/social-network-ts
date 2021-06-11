import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../State";

type PropsType = {
    posts: PostsType[]
}

const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(elements => <Post id-={elements.id} message={elements.message}/>);
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
