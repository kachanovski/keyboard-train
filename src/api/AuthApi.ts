import { instance } from "./instance"

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('logout')
    },
    authMe() {
        return instance.get('auth')
    },
    register(email: string, password: string) {
        return instance.post('register', {email, password})
    },
    googleSignIn() {
        debugger
        return instance.get('google')
    }
}