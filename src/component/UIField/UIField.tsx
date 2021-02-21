import React from 'react'
import './UIField.css'
import { Field } from 'formik'

type FieldProps = {
	errors: any
	touched: any
	title: string
	name: string
	type: string
}

const UIField = ({ errors, touched, title, name, type }: FieldProps) => {
	return (
		<label className='field-label'>
			<div className='field'>
				<span className={'field-title'}>{title}</span>
				<Field
					className='input-field'
					name={name}
					type={type}
				/>
			</div>
			{errors[name] && touched[name] ? (
				<div className='error'>{errors[name]}</div>
			) : null}
		</label>
	)
}

export default UIField