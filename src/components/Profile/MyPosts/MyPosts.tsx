import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';

export const MyPosts = () => {

    let posts = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 10},
        {id: 2, messages: 'This is my first post', likesCount: 20}
    ]

    let postsElements = posts.map( p => <Posts message={p.messages} likesCount={p.likesCount}/> )

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
                {postsElements}
            </div>
        </div>
    )

}