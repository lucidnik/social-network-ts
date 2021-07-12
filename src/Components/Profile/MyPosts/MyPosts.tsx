import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, PostsType, updateNewPostAC} from "../../../redux/ProfileReducer";
import {ActionTypes} from "../../../redux/ReduxStore";

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



const MyPosts = (props: PropsType) => {


    const addPostCallback = () => {
        props.dispatch(addPostAC(props.newPostText));
    };

    const onChangeCallback = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value;
        props.dispatch(updateNewPostAC(newText));
    };


    let postsElements = props.posts.map(elements =>
        <Post id-={elements.id}
              message={elements.message}
              likesCount={elements.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea className={s.textArea} value={props.newPostText} onChange={onChangeCallback}/>
                <button className={s.addPostBtn} onClick={addPostCallback}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
