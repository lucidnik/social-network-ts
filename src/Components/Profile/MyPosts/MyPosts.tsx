import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {


    const addPost = () => {
        props.addPostCallback(props.profilePage.newPostText);
        //   props.dispatch(addPostAC(props.newPostText));
    };

    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value;
        props.onChangeCallback(newText);
        //     props.dispatch(updateNewPostAC(newText));
    };


    let postsElements = props.profilePage.posts.map(elements =>
        <Post id-={elements.id}
              message={elements.message}
              likesCount={elements.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea className={s.textArea} value={props.profilePage.newPostText} onChange={onChangePost}/>
                <button className={s.addPostBtn} onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
