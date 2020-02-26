import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import style from './AnswersList.css';

const AnswersList = (props) => {
    return (
        <ul className={style.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />)
            })}
        </ul>
    );
};

export default AnswersList;