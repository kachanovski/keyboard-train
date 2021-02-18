import { instance } from './instance'

export const adminAPI = {
	getAllCards() {
		return instance.get('card')
	},
	removeCard(id:string) {
		return instance.delete('card', { data:{id: id} })
	},
	updateCard(id: string) {
		return instance.put('card', { data:{id: id} })
	},
}