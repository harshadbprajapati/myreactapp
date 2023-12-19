import { useState } from "react";

function getInTwoDigits(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

function getCurrentTime(){
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  return `${h}:${getInTwoDigits(m)}:${getInTwoDigits(s)}`
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  console.log(getCurrentTime(),":");
  console.log("\tanswer = ", answer);
  console.log("\tstatus = ", status);
  console.log("\terror = ", error);

  if (status === "success") {
    return <h1>That's right!</h1>;
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Capital city quiz</h2>
      <p>
        Which city is the capital of Gujarat?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "gandhinagar";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
