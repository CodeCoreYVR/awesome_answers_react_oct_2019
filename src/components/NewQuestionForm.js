import React from "react";
import FormErrors from "./FormErrors";


function NewQuestionForm(props) {

  const {errors = [] }= props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const newQuestion = {
      title: formData.get("title"),
      body: formData.get("body")
    };

    props.onCreateQuestion(newQuestion);
    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors noField forField="title" errors={errors} />
        
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Please Enter Title"
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <FormErrors noField forField="body" errors={errors} />
        <textarea
          name="body"
          id="body"
          placeholder="Please Enter body"
          rows="2"
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewQuestionForm;
