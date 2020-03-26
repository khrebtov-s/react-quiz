import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './QuizList.css'

export default class QuizList extends React.Component {

    renderQuizes = () => {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={`/quiz/${quiz}`}>
                        Test #{quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.quizList}>
                <h1>Quiz List</h1>
                <div>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>

            </div>
        )
    }
}