import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { Login } from './features/Auth/Login'
import { Register } from './features/Auth/Register'
import { Header } from './features/Header/Header'
import { Menu } from './features/Menu/Menu'
import { Quiz } from './features/Quiz/Quiz'
import { Layout } from './features/TrainLayout/Layout'
import { authMeTC } from './redux/reducers/AuthReducer'
import { StateType } from './redux/store'
import { Profile } from './features/Profile/Profile'
import Card from './features/TrainLayout/Card/Card'
import { AdminProfile } from './features/Profile/AdminProfile/AdminProfile'

export const App = () => {
	const isAuth = useSelector<StateType, boolean>((state: StateType) => state.auth.isAuth)

	const dispatch = useDispatch()

	useEffect(() => {
		!isAuth && dispatch(authMeTC())
	}, [dispatch, isAuth])

	return (
		<div className='app'>
			<div className={'app_container'}>
				<>
					<Menu />
				</>
				<div className={'content_container'}>
					<Header />
					<Switch>
						<Route path={'/train/:category'} render={() => <Layout />} />
						<Route path='/quiz' render={() => <Quiz />} />
						<Route exact path='/' render={() => <Login />} />
						<Route path='/register' render={() => <Register />} />
						<Route path='/profile' render={() => <Profile />} />
						<Route path='/admin' render={() => <AdminProfile />} />
						<Route path='/card' render={() => <Card />} />
					</Switch>
				</div>
			</div>
		</div>
	)
}
