import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { useDispatch } from 'react-redux'
import { getCards } from '../../redux/reducers/KeyboardReducer'


export const Menu = () => {



	const dispatch = useDispatch()

	return (
		<div className={s.menu}>
			<div className={s.container}>
				<div>
					<NavLink to='/' className={s.link}>
						<div className={s.logo}>
							Typing and learn js
						</div>
					</NavLink>
				</div>
				<div>


					<div className={s.link_container}>
					<NavLink to={'/card'} className={s.link} activeClassName={s.activeLink}> Add card</NavLink>
					</div>
				</div>
				<div>
					footer
				</div>
			</div>

		</div>
	)
}