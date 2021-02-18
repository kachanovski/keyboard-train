import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOutTC } from '../../redux/reducers/AuthReducer'
import { StateType } from '../../redux/store'
import './Header.css'

export const Header = () => {
	const isAuth = useSelector<StateType, boolean>((state) => state.auth.isAuth)
	const isAdmin = useSelector<StateType, boolean>(state => state.auth.isAdmin)
	const dispatch = useDispatch()

	return (
		<div className='header'>
			<div className={'container'}>
				{!isAuth ? (
					<div className={'auth-group'}>
						<div className={'auth-btn'}>
							<NavLink to='/'> Login</NavLink>
						</div>
						<div className={'auth-btn'}>
							<NavLink to='/register'> Register</NavLink>
						</div>
					</div>
				) : (<div>
						<div className={'auth-btn'}>
							{isAdmin ? <NavLink to='/admin'> Admin Profile</NavLink> :<NavLink to='/profile'> Profile</NavLink>}
						</div>
						<div className={'auth-btn'} onClick={() => dispatch(logOutTC())}>
							log out
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
