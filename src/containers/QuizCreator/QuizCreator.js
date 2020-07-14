import React from "react";
import classes from "./QuizCreator.css";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";

function createOptionControl(num) {
  return createControl(
    {
      label: `Option ${num}`,
      errorMessage: "Value cannot be empty",
      id: num,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Enter a question",
        errorMessage: "Question cannot be empty",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class QuizCreator extends React.Component {
  state = {
    quiz: [],
    rightAnswerId: 1,
    isFormValid: false,
    formControls: createFormControls(),
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  addQuestionHandler = (e) => {
    e.preventDefault();
    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;

    const {
      question,
      option1,
      option2,
      option3,
      option4,
    } = this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          text: option1,
          id: option1.id,
        },
        {
          text: option2,
          id: option2.id,
        },
        {
          text: option3,
          id: option3.id,
        },
        {
          text: option4,
          id: option4.id,
        },
      ],
    };

    quiz.push(questionItem);

    this.setState({
      quiz,
      rightAnswerId: 1,
      isFormValid: false,
      formControls: createFormControls(),
    });
  };

  createQuizHandler = (e) => {
    e.preventDefault();
    console.log(this.state.quiz);
    // TODO: server
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({ formControls, isFormValid: validateForm(formControls) });
  };

  renderInputsControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <div key={index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 && <hr />}
        </div>
      );
    });
  }

  selectChangeHandler = (e) => {
    this.setState({ rightAnswerId: +e.target.value });
  };

  render() {
    const select = (
      <Select
        label="Choose the correct answer"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputsControls()}
            {select}
            <Button type="primary" onClick={this.addQuestionHandler}>
              Add question
            </Button>
            <Button type="success" onClick={this.createQuizHandler}>
              Create test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
