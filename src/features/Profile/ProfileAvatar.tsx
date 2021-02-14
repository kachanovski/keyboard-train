import s from "./Profile.module.css";
import React from "react";

export const ProfileAvatar = () => {
    return (
            <div className={s.avatar}>
                <img className={s.profileImgAvatar}
                     src={"https://vraki.net/sites/default/files/inline/images/1551511862_48.jpg"}/>
                <button className={s.buttonProfile}>Add img</button>
            </div>
    )
}

