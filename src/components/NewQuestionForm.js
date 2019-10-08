import React from "react";

function NewQuestionForm(props) {
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
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Please Enter Title"
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
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
