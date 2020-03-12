import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import style from './Quiz.css';

class Quiz extends Component {
    state = {
        results: {}, // {[id]: success 'error}
        activeQuestion: 0,
        answerState: null, // {[id]: 'success 'error}
        isFinished: false,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({ isFinished: true })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: { [question.id]: 'error' },
                results
            });

        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    {
                        this.state.isFinished
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                questions={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    };
};

export default Quiz;