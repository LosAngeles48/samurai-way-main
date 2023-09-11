import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';


export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"/>
        </div>
        <div>
            avatar + descriptios
        </div>
       <MyPosts />
    </div>
}