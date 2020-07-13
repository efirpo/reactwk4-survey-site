import React from 'react';


function SurveyForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='Survey name' />
        <input
          type='text'
          name='bookTitle'
          placeholder='Title of book for survey' />
        <input
          type='text'
          name='bookAuthor'
          placeholder='Author of book' />
        <input
          type='text'
          name='question1'
          placeholder='Question 1' />
        <input
          type='text'
          name='question2'
          placeholder='Question 2' />
        <input
          type='text'
          name='question3'
          placeholder='Question 3' />
        <input
          type='text'
          name='question4'
          placeholder='Question 4' />
        <input
          type='text'
          name='question5'
          placeholder='Question 5' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

export default SurveyForm;