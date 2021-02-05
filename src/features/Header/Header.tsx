import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export const Header = () => {

    const [isAuth] = useState<boolean>(false)

    return (
        <div className='header'>
            <div className={'container'}>
                {!isAuth
                    ? <div className={'auth-group'}>
                        <div className={'auth-btn'}>
                            <NavLink to='/'> Login</NavLink>
                        </div>
                        <div className={'auth-btn'}>
                            Register
                        </div>
                    </div>
                    :  <div className={'auth-btn'}>
                        profile
                      </div>}
            </div>
        </div>
    )
}