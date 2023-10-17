import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';

type PostType = {
    id: number
    messages: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
}

export const MyPosts = (props: ProfilePageType) => {


    let postsElements = props.posts.map( p => <Posts message={p.messages} likesCount={p.likesCount}/> )

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