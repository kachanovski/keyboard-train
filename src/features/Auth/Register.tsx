import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerTC } from '../../redux/reducers/AuthReducer'
import UIField from '../../component/UIField'

export const Register: React.FC = () => {
	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	})

	return (
		<div className={'authentication'}>
			<div className={'authentication-card'}>
				<h2 className={'authentication-title'}>Регистрация</h2>
				<Formik
					initialValues={{
						email: '',
						password: '',
						rememberMe: false,
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						dispatch(registerTC(values.email, values.password))
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
							<div className="btns-group">
								<button type="submit" className="btn">
									Отправить
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
