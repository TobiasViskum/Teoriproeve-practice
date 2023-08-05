import React, { useEffect, useRef, useState } from "react";
import { Input } from ".";

import questions from "../lib/questions";

const Question = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const [currQuestion, setCurrQuestion] = useState<Question | null>(null);
  const [answerFeedback, setAnswerFeedback] = useState(<></>);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

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
          setInput2("");
          generateNewQuestion();
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          if (inputRef2.current) {
            inputRef2.current.value = "";
          }
        }}
      >
        {"New Question"}
      </button>
      <div className="flex flex-col items-center text-center gap-y-2 mt-4">
        {currQuestion && currQuestion.explanation ? (
          <>
            <p className="underline text-lg text-neutral-400">Explanation:</p>
            <p className="text-lg font-light text-balance">
              {currQuestion.explanation}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  const sendAnswer = (answer: (number | boolean)[]) => {
    if (currQuestion) {
      if (currQuestion.answer.length === 1) {
        if (answer[0] === currQuestion.answer[0]) {
          setAnswerFeedback(correctAnswer);
        } else {
          setAnswerFeedback(wrongAnswer);
        }
      } else {
        if (
          answer[0] === currQuestion.answer[0] &&
          answer[1] === currQuestion.answer[1]
        ) {
          setAnswerFeedback(correctAnswer);
        } else {
          setAnswerFeedback(wrongAnswer);
        }
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
        {typeof currQuestion.answer[0] !== "boolean" ? (
          <div className="flex items-center flex-col gap-y-4">
            <Input
              spellCheck={false}
              onlyNumbers
              useComma
              maxDecimals={2}
              maxValue={9999}
              value={input}
              ref={inputRef}
              ignorePlaceholderValidation
              onChange={(e) => {
                setInput(e.target.value);
                setAnswerFeedback(<></>);
              }}
              placeholder="Answer..."
              styling={{
                main: "border-neutral-400 bg-neutral-950 border focus:outline-0 py-1 text-center rounded-lg placeholder-neutral-600 text-slate-50",
                feedbackText: "text-2xs bg-neutral-950 rounded-md -bottom-2.5",
              }}
            />
            {currQuestion.answer.length === 2 && (
              <Input
                ref={inputRef2}
                spellCheck={false}
                onlyNumbers
                useComma
                maxDecimals={2}
                maxValue={9999}
                value={input2}
                ignorePlaceholderValidation
                onChange={(e) => {
                  setInput2(e.target.value);
                  setAnswerFeedback(<></>);
                }}
                placeholder="Answer..."
                styling={{
                  main: "border-neutral-400 bg-neutral-950 border focus:outline-0 py-1 text-center rounded-lg placeholder-neutral-600 text-slate-50",
                  feedbackText:
                    "text-2xs bg-neutral-950 rounded-md -bottom-2.5",
                }}
              />
            )}
            {input !== "" && (
              <button
                className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg w-1/2"
                onClick={() => {
                  const numbered = Number(input.replace(",", "."));
                  const numbered2 = Number(input2.replace(",", "."));
                  if (
                    !isNaN(numbered) &&
                    (currQuestion.answer.length === 2
                      ? !isNaN(numbered2)
                      : true)
                  ) {
                    if (currQuestion.answer.length === 1) {
                      sendAnswer([numbered]);
                    } else {
                      sendAnswer([numbered, numbered2]);
                    }
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
              onClick={() => sendAnswer([true])}
              className="border-neutral-400 bg-neutral-950 border outline-0 py-1 text-center rounded-lg px-6"
            >
              True
            </button>
            <button
              onClick={() => sendAnswer([false])}
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
        className="absolute bottom-8 bg-slate-50 text-zinc-950 rounded-lg px-8 py-2 text-lg font-medium landscape:right-8"
      >
        {"Reset"}
      </button>
    </>
  );
};

export default Question;
