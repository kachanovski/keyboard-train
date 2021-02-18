import { instance } from './instance'

interface IAddCard {
	message: string
	statusCode: number
}

interface ICard {
	_id: string
	author: string
	code: string
	created: string
	updated: string
}

interface IGetCards {
	message: string
	count: number
	cards: ICard[]
}

export const cardAPI = {
	getCards(category?: string): Promise<IGetCards> {
		return instance.get(`card?category=${category}`, {}).then(res => res.data)
	},
	addCard(author: string, category: string, code: string): Promise<IAddCard> {
		return instance.post('card', { author, category, code }).then(res => res.data)
	},
}