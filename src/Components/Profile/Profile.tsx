import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileAPIType = {
    profile: {
        aboutMe: string
        contacts: {
            facebook: string | null
            website: string | null
            vk: string | null
            twitter: string | null
            instagram: string | null
            youtube: string | null
            github: string | null
            mainLink: string | null
        }
        lookingForAJob: boolean
        lookingForAJobDescription: string | null
        fullName: string
        userId: number
        photos: {
            small: string  | undefined
            large: string  | undefined
        }
    }

}

const Profile = (props: ProfileAPIType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;

