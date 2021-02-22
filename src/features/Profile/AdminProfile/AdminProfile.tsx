import React from 'react'
import s from './AdminProfile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cardsType, getAllCardsTC, removeCardTC } from '../../../redux/reducers/AdminReducer'
import { StateType } from '../../../redux/store'

export const AdminProfile = () => {
	const cards = useSelector<StateType, Array<cardsType>>(state => state.admin.cards)
	const dispatch = useDispatch()

	const getCardsHandler = () => {
		dispatch(getAllCardsTC())
	}

	const removeCard = (id: string) => {
		dispatch(removeCardTC(id))
	}


	return (
		<div className={s.adminProfile}>
			<div className={s.container}>
				<div>
					<h1>menu</h1>
					<div>
						<button onClick={getCardsHandler}>
							1.getCards
						</button>
					</div>
				</div>

				<div className={s.cards}>
					{cards.map(c => <div key={c._id} className={s.cardContainer}>
						<span>code: {c.code}</span>
						<span>category: {c.category}</span>
						<span>author: {c.author}</span>
						<button onClick={() => removeCard(c._id)}>X</button>
					</div>)}
				</div>
			</div>
		</div>
	)
}