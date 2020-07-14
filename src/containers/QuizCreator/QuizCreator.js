import React from "react";
import classes from "./QuizCreator.css";
import Button from "../../components/UI/button/button";
import { createControl } from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";

function createOptionControl(num) {
  return createControl(
    {
      label: `Option ${num}`,
      errorMessage: "Value cannot be empty",
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
    formControls: {
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
    },
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  addQuestionHandler = () => {};

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {};

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

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputsControls()}
            <select name="" id=""></select>
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
