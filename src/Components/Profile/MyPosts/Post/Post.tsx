import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
}

const Post = (props: PropsType) => {
    return (

        <div className={s.item}>
            <img src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post