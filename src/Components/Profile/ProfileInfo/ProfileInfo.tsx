import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileAPIType} from "../Profile";


const ProfileInfo = (props: ProfileAPIType) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={s.profileBlock}>
            <div>
                <img className={s.content} src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
                     alt=""/>
            </div>
            <img className={s.profilePicture} src={props.profile.photos.small} alt=''/>
            <div className={s.ava} >{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;