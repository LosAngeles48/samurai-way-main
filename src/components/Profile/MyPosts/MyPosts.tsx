import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {ProfilePageType} from '../../../Redux/state';



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