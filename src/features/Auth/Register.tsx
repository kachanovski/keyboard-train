import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { authenticationThunk } from '../../redux/reducers/AuthenticationReducer';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import { Redirect } from 'react-router-dom';

export const Register: React.FC = () => {
	const dispatch = useDispatch();
	const {token} = useSelector((state: StateType) => state.authentication);

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	});

	if(token.length > 1) 
		return <Redirect to={'/interviews'} />

  return (
		<div className={'authentication'}>
			<div className={'authentication-card'}>
				<h2 className={'authentication-title'}>Регистрация</h2>
				<Formik
					initialValues ={{
						email: '',
						password: '',
						rememberMe: false
					}}
					validationSchema={SignupSchema}
					onSubmit={values => {
						dispatch(authenticationThunk('register', values.email, values.password));
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
									<Field className='authentication-field' name="password" type="password" />
								</div>
									{errors.password && touched.password ? (
										<div className='error'>{errors.password}</div>
								) : null}
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

