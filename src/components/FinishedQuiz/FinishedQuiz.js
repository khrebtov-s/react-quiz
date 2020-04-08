import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/button/button'
import { Link } from 'react-router-dom'


const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

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

            <p>Correct answer {successCount}/{props.quiz.length}</p>
            <div>
                <Button
                    onClick={props.onRetry}
                    type='primary'
                    disabled={false}
                >
                    Repeat
                </Button>
                <Link to='/'>
                    <Button
                        type='success'
                        disabled={false}
                    >
                        Go to the test list
                </Button>
                </Link>

            </div>
        </div>
    );
};

export default FinishedQuiz;