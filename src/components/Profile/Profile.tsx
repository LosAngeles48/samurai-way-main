import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './Profileinfo/ProfileInfo';

type PostType = {
    id:number
    messages:string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

 export const Profile = (props:ProfilePageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile