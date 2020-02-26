import React from 'react'
import classes from './FinishedQuiz.css';

const FinishedQuiz = (props) => {
    return (
        <div className={classes.FinishedQuiz}>
            <h1>Your answered all questions</h1>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )

                })}
            </ul>

            <p>Correct answer 4/10</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;