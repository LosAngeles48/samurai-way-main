import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                <textarea> </textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Posts message='Hi, how are you?' likesCount='10' />
                <Posts message='This is my first post'  likesCount='20' />
            </div>
        </div>
    )

}