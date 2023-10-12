import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';

export const MyPosts = () => {

    let postData = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 10},
        {id: 2, messages: 'This is my first post', likesCount: 20}
    ]


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
                <Posts message={postData[0].messages} likesCount={postData[0].likesCount}/>
                <Posts message={postData[1].messages} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )

}