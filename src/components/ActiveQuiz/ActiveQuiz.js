import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import style from './ActiveQuiz.css';

const ActiveQuiz = (props) => (
    <div className={style.ActiveQuiz}>
        <p className={style.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.questions}
            </span>
            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
);

export default ActiveQuiz;