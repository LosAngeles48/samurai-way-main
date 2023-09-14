import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';


export const Profile = () => {
    return <div>
        <div >
            <img src="https://99px.ru/sstorage/53/2021/05/mid_326963_286307.jpg" />
        </div>
        <div>
            avatar + descriptios
        </div>
       <MyPosts />
    </div>
}