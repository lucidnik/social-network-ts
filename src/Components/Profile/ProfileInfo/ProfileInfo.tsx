import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileBlock}>
            <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
                     alt=""/>
            </div>
            <div>ava</div>
        </div>
    );
};

export default ProfileInfo;