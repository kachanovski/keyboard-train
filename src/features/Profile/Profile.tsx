import React from 'react';
import s from './Profile.module.css'
import {ProfileAvatar} from "./ProfileAvatar";
import {ProfileInfo} from "./ProfileInfo";
import {ProfileResult} from "./ProfileResult";

export function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.container}>
                <div className={s.profileInfo}>
                    <ProfileAvatar/>
                    <ProfileInfo/>
                </div>
               <ProfileResult/>
            </div>
        </div>
    )
}

