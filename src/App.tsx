import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import './App.css'
import { Login } from './features/Auth/Login'
import { Register } from './features/Auth/Register'
// import { Header } from './features/Header/Header'
// import { Menu } from './features/Menu/Menu'
import { Quiz } from './features/Quiz/Quiz'
// import { TrainLayout } from './features/TrainLayout/TrainLayout'
import { authMeTC, logOutTC } from './redux/reducers/AuthReducer'
import { StateType } from './redux/store'
import { Profile } from './features/Profile/Profile'
import Card from './features/TrainLayout/Card/Card'
import { AdminProfile } from './features/Profile/AdminProfile/AdminProfile'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import s from './features/Menu/Menu.module.css'
import { TrainLayout } from './features/TrainLayout/TrainLayout'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export const trainKeyBoardCategories = [
	{ name: 'Class', link: 'Class' },
	{ name: 'Function', link: 'Function' },
	{ name: 'Promise', link: 'Promise' },
	{ name: 'Hosting', link: 'Hosting' },
	{ name: 'Prototype', link: 'Prototype' },
]
const quizCategories = [
	{ name: 'JavaScript', link: 'js' },
	{ name: 'CSS', link: 'functions' },
	{ name: 'Array', link: 'array' },
	{ name: 'Object', link: 'object' },
	{ name: 'Interwiu', link: 'interwies' },
]


export const App = () => {
	const isAuth = useSelector<StateType, boolean>((state: StateType) => state.auth.isAuth)
	const isAdmin = useSelector<StateType, boolean>((state: StateType) => state.auth.isAdmin)

	const dispatch = useDispatch()

	useEffect(() => {
		!isAuth && dispatch(authMeTC())
	}, [dispatch, isAuth])

	return (
/*
		<div className='app'>
			<div className={'app_container'}>
				<>
					<Menu />
				</>
				<div className={'content_container'}>
					<Header />
					<Switch>
						<Route path={'/train/:category'} render={() => <TrainLayout />} />
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

*/


	<Layout style={{height: "100vh"}}>
		<Header style={{display:"flex", justifyContent:"space-between"}}>
			<div  >
				Typing and learn js
			</div>
			<Menu theme="dark" mode="horizontal">
				{!isAuth
					? <Menu theme="dark" mode="horizontal">
						<Menu.Item key="1">
							<NavLink to='/'> Sign In</NavLink>
						</Menu.Item>
					<Menu.Item key="2">
						<NavLink to='/register'> Sign Up</NavLink>
					</Menu.Item>
					</Menu>
				 : <Menu theme="dark" mode="horizontal">
							<Menu.Item key="1">
								{isAdmin ? <NavLink to='/admin'> Admin Profile</NavLink> :<NavLink to='/profile'> Profile</NavLink>}
							</Menu.Item>
							<Menu.Item key="2" onClick={() => dispatch(logOutTC())}>
								Sign Out
							</Menu.Item>
						</Menu>
				}
			</Menu>
		</Header>
		<Layout>
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
					style={{ height: '100%', borderRight: 0 }}
				>
					<Menu.Item key="sub1" icon={<UserOutlined />}>
						<NavLink to={`/profile`}> Profile </NavLink>
					</Menu.Item>
					<SubMenu key="sub2" icon={<UserOutlined />} title="Keyboard trainer">

						{trainKeyBoardCategories.map((c, id) =>
								<Menu.Item key={id}>
									<NavLink to={`/train/${c.link}`}> {c.name}</NavLink>
								</Menu.Item>
						)}

					</SubMenu>
					<SubMenu key="sub3" icon={<LaptopOutlined />} title="Quiz">

						{quizCategories.map((c, id) =>
							<Menu.Item key={id}>
								<NavLink to={`/quiz/${c.link}`}> {c.name}</NavLink>
							</Menu.Item>
						)}

					</SubMenu>
				</Menu>
			</Sider>
			<Layout style={{ padding: '0 24px 24px' }}>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					<Switch>
						<Route path={'/train/:category'} render={() => <TrainLayout />} />
						<Route path='/quiz' render={() => <Quiz />} />
						<Route exact path='/' render={() => <Login />} />
						<Route path='/register' render={() => <Register />} />
						<Route path='/profile' render={() => <Profile />} />
						<Route path='/admin' render={() => <AdminProfile />} />
						<Route path='/card' render={() => <Card />} />
					</Switch>
				</Content>
			</Layout>
		</Layout>
	</Layout>

	)
}
