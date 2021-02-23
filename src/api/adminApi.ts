import { instance } from './instance'

export const adminAPI = {
	getAllCards() {
		console.log('adminAPI getAllCards')
		return instance.get('card')
	},
	deleteCard(id:string) {
		// return instance.delete(`card/${id}`)
		// return instance.delete(`cards/${id}`)
		// return instance.delete(`card?${id}`)
		// return instance.delete(`cards?${id}`)
		// return instance.delete(`card/?${id}`)
		// return instance.delete(`cards/?${id}`)
		// return instance.delete(`cards/?=${id}`)
		// return instance.delete(`card/?=${id}`)
		// return instance.delete(`cards/?id=${id}`)
		// return instance.delete(`card/?id=${id}`)
		return instance.delete(`/card?id=${id}`)
	},
	updateCard(author?: string, code?: string,category?: string) {
		return instance.put('card', { data:{author, code, category} })
	},
}