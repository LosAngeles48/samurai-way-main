import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './Profileinfo/ProfileInfo';
import {ProfilePageType} from '../../index';


 export const Profile = (props:ProfilePageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile