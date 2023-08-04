import React, { useEffect, useRef, useState } from "react";

import questions from "../lib/questions";

const Question = () => {
  const [currQuestion, setCurrQuestion] = useState<Question | null>(null);
  const [answerFeedback, setAnswerFeedback] = useState(<></>);
  const [input, setInput] = useState("");

  const generateNewQuestion = () => {
    const newQuestionObject =
      questions[Math.floor(Math.random() * questions.length)];
    setCurrQuestion(newQuestionObject);
  };

  const wrongAnswer = (
    <p className="text-red-400 font-medium">{"Wrong answer!"}</p>
  );
  const correctAnswer = (
    <div className="flex flex-col items-center gap-y-3">
      <p className="text-green-400 font-medium">{"Correct answer!"}</p>
      <button
        className="bg-slate-50 text-zinc-950 rounded-lg px-4 py-0.5 text-lg font-medium"
        onClick={() => {
          setAnswerFeedback(<></>);
          setInput("");
          generateNewQuestion();
        }}
      >
        {"New Question"}
      </button>
    </div>
  );

  const sendAnswer = (answer: number | boolean) => {
    console.log(answer);

    if (currQuestion) {
      if (answer === currQuestion.answer) {
        setAnswerFeedback(correctAnswer);
      } else {
        setAnswerFeedback(wrongAnswer);
      }
    }
  };

  if (currQuestion === null) {
    return (
      <>
        <button
          onClick={generateNewQuestion}
          className="bg-slate-50 text-zinc-950 rounded-lg px-8 py-2 text-lg font-medium"
        >
          {"Start!"}
        </button>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center relative h-full">
        <div className="flex flex-col items-center text-center gap-y-2">
          <p className="underline text-lg text-neutral-400">Question:</p>
          <p className="text-xl font-medium text-balance">
            {currQuestion.question}
          </p>
        </div>
        {typeof currQuestion.answer === "number" ? (
          <div className="flex items-center flex-col gap-y-4">
            <input
              spellCheck={false}
              inputMode="numeric"
              pattern="[0-9]"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setAnswerFeedback(<></>);
              }}
              placeholder="Answer..."
              className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg placeholder-neutral-600"
            />
            {input !== "" && (
              <button
                className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg w-1/2"
                onClick={() => {
                  const numbered = Number(input);
                  if (!isNaN(numbered)) {
                    sendAnswer(numbered);
                  } else {
                    setAnswerFeedback(wrongAnswer);
                  }
                }}
              >
                Confirm
              </button>
            )}
          </div>
        ) : (
          <div className="flex gap-x-4">
            <button
              onClick={() => sendAnswer(true)}
              className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg px-6"
            >
              True
            </button>
            <button
              onClick={() => sendAnswer(false)}
              className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg px-6"
            >
              False
            </button>
          </div>
        )}
        {answerFeedback}
      </div>
      <button
        onClick={() => {
          setAnswerFeedback(<></>);
          setCurrQuestion(null);
          setInput("");
        }}
        className="absolute bottom-8 bg-slate-50 text-zinc-950 rounded-lg px-8 py-2 text-lg font-medium"
      >
        {"Reset"}
      </button>
    </>
  );
};

export default Question;
