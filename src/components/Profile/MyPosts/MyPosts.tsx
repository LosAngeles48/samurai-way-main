import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {ProfilePageType} from '../../../Redux/state';



export const MyPosts = (props: ProfilePageType) => {


    let postsElements = props.posts.map( p => <Posts message={p.messages} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

   const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)

        }
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}