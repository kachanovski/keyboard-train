import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Menu.module.css'

export const Menu = () => {

    const category = [
        {name: "Keyboards", link: "/interviews"},
        {name: "Profile", link: "/profile"},
        {name: "Quiz", link: "/quiz"},
        {name: "add card", link: "/card"},
        ]


    return (
        <div className={s.menu}>
            <div className={s.container}>
                <div>
                    <NavLink to='/' className={s.link}>
                        <div className={s.logo}>
                            Typing and   learn js
                        </div>
                    </NavLink>
                </div>
                <div >

                    {category.map((c,id) =>
                      <div className={s.link_container}>
                        <NavLink key={id} to={c.link}  className={s.link} activeClassName={s.activeLink}> {c.name}</NavLink>
                      </div>
                    )}

                </div>
                <div>
                    footer
                </div>
            </div>

        </div>
    )
}