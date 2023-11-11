import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './Profileinfo/ProfileInfo';
import {addPost, ProfilePageType} from '../../Redux/state';


export type ProfilePropsType = {
    profilePage: ProfilePageType


}

 export const Profile = (props:ProfilePropsType) => {


    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPostCallBack={addPost} />
        </div>
    )
}

