import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/ProfileReducer";

type PropsType = {
    posts: PostsType[]
    newPostText: string
    onChangeCallback: (newText: string) => void
    addPostCallback: () => void
}


const MyPosts = (props: PropsType) => {


    const addPost = () => {
        props.addPostCallback();
        //   props.dispatch(addPostAC(props.newPostText));
    };

    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value;
        props.onChangeCallback(newText);
        //     props.dispatch(updateNewPostAC(newText));
    };


    let postsElements = props.posts.map(elements =>
        <Post id-={elements.id}
              message={elements.message}
              likesCount={elements.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea className={s.textArea} value={props.newPostText} onChange={onChangePost}/>
                <button className={s.addPostBtn} onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
