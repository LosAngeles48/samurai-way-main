import React from 'react';
import s from './Posts.module.css';

type PostsPropsType = {
    message: string
}

export const Posts = (props: PostsPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" className={s.item}/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
)
}
