import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {changeText, PostsType} from "../../../redux/State";

type PropsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
    newPostText: string
    changeText: (newText: string) => void
}

const MyPosts = (props: PropsType) => {


    const addPostCallback = () => {
      props.addPost(props.newPostText)
    };

    const onChangeCallback = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        changeText(newText)
    }


    let postsElements = props.posts.map(elements =>
        <Post id-={elements.id}
              message={elements.message}
              likesCount={elements.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea className={s.textArea} value={props.newPostText} onChange={onChangeCallback} />
                <button className={s.addPostBtn} onClick={addPostCallback}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
