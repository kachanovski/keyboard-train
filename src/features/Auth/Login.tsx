import React from 'react'
import './Login.css'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'
import { googleSignInTC, loginTC } from '../../redux/reducers/AuthReducer'
import UIField from '../../component/UIField'

export const Login: React.FC = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector((state: StateType) => state.auth.isAuth)
	console.log('login', isAuth)

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		rememberMe: Yup.boolean(),
	})

	if (isAuth) return <Redirect to={'/interviews'} />

	return (
		<div className={'authentication'}>
			<div className={'authentication-card'}>
				<h2 className={'authentication-title'}>Авторизация</h2>
				<Formik
					initialValues={{
						email: '',
						password: '',
						rememberMe: false,
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						dispatch(loginTC(values.email, values.password, values.rememberMe))
					}}
				>
					{({ errors, touched }) => (
						<Form className="authentication-form">
							<UIField
								title={'Введите Email'}
								errors={errors}
								touched={touched}
								name={'email'}
								type={'email'}
							/>
							<UIField
								title={'Введите пароль'}
								errors={errors}
								touched={touched}
								name={'password'}
								type={'password'}
							/>
							<UIField
								title={'Запомнить меня'}
								errors={errors}
								touched={touched}
								name={'checked'}
								type={'checkbox'}
							/>
							<div className="btns-group">
								<button type="submit" className="btn">
									Отправить
								</button>
							</div>
						</Form>
					)}
				</Formik>

				<button onClick={dispatch(googleSignInTC)}>google</button>
			</div>
		</div>
	)
}
