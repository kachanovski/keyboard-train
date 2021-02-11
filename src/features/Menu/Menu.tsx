import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Menu.module.css'

export const Menu = () => {

    const category = [
        {name: "Keyboards", link: "/interviews"},
        {name: "Profile", link: "/profile"},
        {name: "Quiz", link: "/quiz"}
        ]


    return (
        <div className={s.menu}>
            <div className={s.container}>
                <div>
                    <NavLink to='/'>Logo</NavLink>
                </div>
                <div>
                    {category.map((c,id) =>
                        <NavLink key={id} to={c.link} activeClassName={s.active}> {c.name}</NavLink>
                    )}

                </div>
                <div>
                    footer
                </div>
            </div>

        </div>
    )
}