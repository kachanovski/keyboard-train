const BASE_URL = 'http://localhost:5000';

function apiFetch<T>(url: string, options = {}): Promise<T> {
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then(response => {
				if(response.status < 400){
					return response.json();
				} else {
					throw response;
				}
				})
				.then(data => resolve(data))
				.catch(response  => {
					response.json().then((error: string) => {
						reject(error);
					});
				})		
	})
}

export class CallApi {
	static post<T>(url: string, params = {}): Promise<T>{
		return apiFetch(`${BASE_URL}/${url}`, {
			method: "POST",
			mode: "cors",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(params)				
		})
	}

	static delete(url: string, params = {}){
		return apiFetch(`${BASE_URL}/${url}`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(params)			
		})
	}
}