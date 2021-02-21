import React from 'react'
import './Login.css'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'
import { loginTC } from '../../redux/reducers/AuthReducer'
import UIField from '../../component/UIField/UIField'


export const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { isAuth, errorMessage, email, password } = useSelector((state: StateType) => state.auth);
	console.log('login', errorMessage)

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(5, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		rememberMe: Yup.boolean(),
	})

	if (isAuth) return <Redirect to={'/interviews'} />

	return (
		<div className={'authentication'}>
			<div className={'auth-img-container'}/>

			<div className={'authentication-card'}>
				<div className={'auth-form'}>
					<div className={'authentication-title'}>LOGIN TO ACCOUNT</div>
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
									title={'Email'}
									errors={errors}
									touched={touched}
									name={'email'}
									type={'email'}
								/>
								<UIField
									title={'Password'}
									errors={errors}
									touched={touched}
									name={'password'}
									type={'password'}
								/>
								<UIField
									title={'Remember me'}
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
				</div>

			</div>
		</div>
	)
}
