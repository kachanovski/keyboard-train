import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOutThunk } from '../../redux/reducers/AuthenticationReducer'
import { StateType } from '../../redux/store'
import './Header.css'

export const Header = () => {
	const { token } = useSelector((state: StateType) => state.authentication)
	const dispatch = useDispatch()

	return (
		<div className="header">
			<div className={'container'}>
				{token.length === 0 ? (
					<div className={'auth-group'}>
						<div className={'auth-btn'}>
							<NavLink to="/"> Login</NavLink>
						</div>
						<div className={'auth-btn'}>
							<NavLink to="/register"> Register</NavLink>
						</div>
					</div>
				) : (
					<div className={'auth-btn'} onClick={() => dispatch(logOutThunk())}>
						Выйти
					</div>
				)}
			</div>
		</div>
	)
}
