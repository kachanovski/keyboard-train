import React, { useEffect } from 'react';
import './Login.css'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { authenticationThunk } from '../../redux/reducers/AuthenticationReducer';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import { Redirect } from 'react-router-dom';

export const Login: React.FC = () => {
	const dispatch = useDispatch();
	const {token} = useSelector((state: StateType) => state.authentication);
	console.log('token:', token)

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
		rememberMe: Yup.boolean()
	});

	if(token.length > 1) 
		return <Redirect to={'/interviews'} />

  return (
		<div className={'authentication'}>
			<div className={'authentication-card'}>
			<h2 className={'authentication-title'}>Авторизация</h2>
			<Formik
				initialValues ={{
					email: '',
					password: '',
					rememberMe: false
				}}
				validationSchema={SignupSchema}
				onSubmit={values => {
					dispatch(authenticationThunk('login', values.email, values.password, values.rememberMe));
				}}
			>
				{({ errors, touched }) => (
					<Form className='authentication-form'>
	
						<label>
							<div className='field'>
								<span>Введите Email</span>	
								<Field className='authentication-field' name="email" type="email" />
							</div>
							{errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
						</label>

						<label>
							<div className='field'>
								<span>Введите пароль</span>
								<Field className='authentication-field' name="password" />
							</div>
								{errors.password && touched.password ? (
									<div className='error'>{errors.password}</div>
							) : null}
						</label>

						<label style={{textAlign: "left"}}>
							<span>Запомнить меня</span>
							<Field 
								type="checkbox"
								name="checked"
								value="rememberMe" 
							/>
						</label>
						<div className='btns-group'>
							<button type="submit" className='btn'>Отправить</button>
						</div>
					</Form>
				)}
			</Formik>
			</div>
	</div>
	)
}

