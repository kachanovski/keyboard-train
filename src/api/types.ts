interface IData {
	id?: string
	_id?: string
	email: string
	rememberMe: boolean
}

export interface IIsLogin {
	data?: IData
	body?: IData
	message: string
	statusCode: number
}

