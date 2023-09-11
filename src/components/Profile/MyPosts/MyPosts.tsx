import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post

            </div>
            <div className={s.posts}>
                <Posts message='Hi, how are you?' likesCount='10' />
                <Posts message='This is my first post'  likesCount='20' />
            </div>
        </div>
    )

}