import React from 'react'
import './../App.css';
import { Field } from 'formik'

type FieldProps = {
	errors: any
	touched: any
	title: string
	name: string
	type: string
}

const UIField = ({errors, touched, title, name, type}: FieldProps) => {
	return (
		<label>
			<div className="field">
				<span>{title}</span>
				<Field
					className="authentication-field"
					name={name}
					type={type}
				/>
			</div>
			{errors[name] && touched[name] ? (
				<div className="error">{errors[name]}</div>
			) : null}
		</label>
	)
}

export default UIField;