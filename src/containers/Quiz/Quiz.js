import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import style from './Quiz.css';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // {[id]: 'success 'error}
        quiz: [
            {
                id: 1,
                question: 'What color is the sky?',
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Blue', id: 2 },
                    { text: 'Green', id: 3 },
                    { text: 'Yellow', id: 4 },
                ],
                rightAnswerId: 2,
            },
            {
                id: 2,
                question: 'In what year was St. Petersburg founded?',
                answers: [
                    { text: '1699', id: 1 },
                    { text: '1730', id: 2 },
                    { text: '1703', id: 3 },
                    { text: '1755', id: 4 },
                ],
                rightAnswerId: 3,
            },
        ],

    };

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: { [answerId]: 'success' }
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: { [answerId]: 'error' }
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        questions={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    };
};

export default Quiz;