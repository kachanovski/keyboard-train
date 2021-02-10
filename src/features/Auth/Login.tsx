import React from 'react'
import './Login.css'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'
import { googleSignInTC, loginTC } from '../../redux/reducers/AuthReducer'

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
							<label>
								<div className="field">
									<span>Введите Email</span>
									<Field
										className="authentication-field"
										name="email"
										type="email"
									/>
								</div>
								{errors.email && touched.email ? (
									<div className="error">{errors.email}</div>
								) : null}
							</label>

							<label>
								<div className="field">
									<span>Введите пароль</span>
									<Field className="authentication-field" name="password" type={'password'} />
								</div>
								{errors.password && touched.password ? (
									<div className="error">{errors.password}</div>
								) : null}
							</label>

							<label style={{ textAlign: 'left' }}>
								<span>Запомнить меня</span>
								<Field type="checkbox" name="checked" value="rememberMe" />
							</label>
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
