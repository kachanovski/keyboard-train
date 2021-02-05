import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'
export const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.container}>
                <div>
                    <NavLink to='/'>Logo</NavLink>
                </div>
                <div>
                    <NavLink to='/interviews'> Категория 1</NavLink>
                </div>
                <div>
                    footer
                </div>
            </div>

        </div>
    )
}