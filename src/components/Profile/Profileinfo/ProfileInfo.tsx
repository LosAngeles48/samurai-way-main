import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://99px.ru/sstorage/53/2021/05/mid_326963_286307.jpg"/>
        </div>
        <div className={s.descriptiosBlock}>
            avatar + descriptios
        </div>
    </div>
}