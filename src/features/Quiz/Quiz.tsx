import React, { useState } from 'react'
import s from './Quiz.module.css'

export const Quiz = () => {

	const question = [
		{
			text: 'wqeqwrqwre',
			img: '',
		},
	]
	const answers = [
		{ name: 'ответ 1' },
		{ name: 'ответ 2' },
		{ name: 'ответ 3' },
	]


	const [checked, setChecked] = useState<string>()


	return (
		<div className={s.quiz}>
      <div className={s.question}>
        {question.map(q =>
          <div>
            <div className={s.textQuestion}>Вопрос: {q.text}</div>
            {/*<img src={q.img} alt=""/>*/}
          </div>,
        )}
      </div>

			<div className={s.answers}>
				<div>Ответы:</div>
				<div className={s.answer}>
					{answers.map(a =>
						<form>
							<label>{a.name}</label>
							<input type='radio' checked={a.name === checked} onChange={() => setChecked(a.name)} />
						</form>,
					)}
				</div>
        <button>
          Next
        </button>
			</div>

		</div>
	)
}