import React,{ useState }  from 'react'
import './../../../App.css';
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import UIField from '../../../component/UIField';
import { cardAPI } from '../../../api/CardApi';
//@ts-ignore
import {NotificationContainer, NotificationManager} from 'react-notifications';


interface ICard {
	author: string
	category: string
	code: string
}

const dictionary = ['Function', 'Class', 'Promise', 'Hosting', 'Prototype'];

export const Card = () => {
	const [categories, setCategories] = useState<string[]>(dictionary);
	const [card, setCard] = useState<ICard>({
		author: '',
		category: categories[0],
		code: '',
	})

	const SignupSchema = Yup.object().shape({
		author: Yup.string().required('Required'),
		category: Yup.string(),
		code: Yup.string().required('Required'),
	})

	return (
		<div className='wrapper-card'>
			<div className='card'>
				<div className='card-header'>
					<h2>Добавить карточку</h2>
				</div>
					<Formik
						initialValues={{
							author: '',
							category: categories[0],
							code: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={async (values) => {
							try{
								const response = await cardAPI.addCard(values.author, values.category, values.code);
								if(response.statusCode > 200){
									console.log('Карточка добавлена');
									return
								}
								else 
									NotificationManager.success('Карточка не добавлена, попробуйте позже', 3000);
							}
							catch(err){
								NotificationManager.success('Ошибка сервера', 3000);
							}			
						}}
					>
						{({ errors, touched }) => {
							return <Form className="authentication-form">
								<UIField
									title={'Введите имя'}
									errors={errors}
									touched={touched}
									name={'author'}
									type={'text'}
								/>
								<UIField 
									title={'Введите описание'}
									errors={errors}
									touched={touched}
									name={'code'}
									type={'text'}
								/>
								<label>
									<div className="field">
										<span>Выберите категорию</span>
										<Field as="select" name="category">
											{categories.map((category, i) => <option key={i} value={category}>{category}</option>)}
										</Field>
									</div>
									{errors.category && touched.category ? (
										<div className="error">{errors.category}</div>
									) : null}
								</label>
								<div className="btns-group">
									<button 
										type="submit"
										className="btn"
									>
										Отправить
									</button>
								</div>
							</Form>
						}}
					</Formik>
			</div>
		</div>
	)
}

export default Card;