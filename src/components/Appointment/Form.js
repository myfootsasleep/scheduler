import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from "react";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const validate = () => {
    if (student === "") {
      setError("student name cannot be blank");
      return;
    } 
    else if ( interviewer === null ) {
      setError("Please select an interviewer");
      return;
    }
     else {
      setError("");
      return props.onSave(student, interviewer);
    }
  };

  const reset = () => {
    setStudent(""); // Reset the student state
    setInterviewer(null); // Reset the interviewer state
  };
  const cancel = () => {
    reset(); // Call the reset function to reset the form
    props.onCancel();
  };
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={()=> validate() }>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
