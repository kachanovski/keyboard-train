import React from 'react'
import './Login.css'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'
import { googleSignInTC, loginTC } from '../../redux/reducers/AuthReducer'
import UIField from '../../component/UIField/UIField'


export const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { isAuth, errorMessage, email, password } = useSelector((state: StateType) => state.auth);
	console.log('login', errorMessage)

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
						email: email,
						password: password,
						rememberMe: false,
					}}
					validationSchema={SignupSchema}
					onSubmit={async (values, actions) => {
						try {
							await dispatch(loginTC(values.email, values.password, values.rememberMe));
						}
						catch (error) {
							actions.setStatus('Введите корректный логин или пароль')
						}
					}}
				>
					{({ errors, touched, isSubmitting, isValid, dirty, status }) => (
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
								<button
									type="submit"
									className="btn"
									//disabled={(!isValid || !dirty) || isSubmitting}
								>
									Отправить
								</button>
							</div>
							{status && (
								<div className="error">{status}</div>
							)}
						</Form>
					)}
				</Formik>
				<button onClick={dispatch(googleSignInTC)}>google</button>
			</div>
		</div>
	)
}
