import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { Login } from './features/Auth/Login'
import { Register } from './features/Auth/Register'
import { Header } from './features/Header/Header'
import { Menu } from './features/Menu/Menu'
import { Layout } from './features/TrainLayout/Layout'
import { StateType } from './redux/store'

export const App = () => {
	const { token } = useSelector((state: StateType) => state.authentication)

	return (
		<div className="App">
			<div className={'context'}>
				<div>
					<Menu />
				</div>
				<div className={'context__inner'}>
					<Header />

					<Switch>
						<Route path="/interviews" render={() => <Layout />} />
						<Route exact path="/" render={() => <Login />} />
						<Route path="/register" render={() => <Register />} />
					</Switch>
				</div>
			</div>
		</div>
	)
}
