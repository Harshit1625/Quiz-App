import { useEffect, useState } from "react";
import QuestionList from "../data/quiz.json";
import Navbar from "./Navbar";
import Result from "./Result";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState(false);
  const [selectedOne, setSelectedOne] = useState(null);
  const [markedAnswers, setMarkedAnswers] = useState([]);
  const [outOfTime, setOutOfTime] = useState(false);
  const [time, setTimer] = useState(10 * 60 * 1000);


 

  useEffect(() => {
    const timerChanger = setTimeout(() => {
      setTimer(time - 1000);
    }, 1000);

    if (time === 0) {
      clearTimeout(timerChanger);
      setOutOfTime(true);
    }
  }, [time]);

  if (outOfTime) {
    navigate("/out-of-time");
  }

  useEffect(() => {
    if (questionIndex + 1 === QuestionList.length) {
      setSubmit(true);
    }
  }, [questionIndex]);

  function handleNext() {
    setMarkedAnswers([...markedAnswers, selectedOne]);
    setQuestionIndex(questionIndex + 1);
    setSelectedOne(null);
  }

  function handleSubmit() {
    setMarkedAnswers([...markedAnswers, selectedOne]);
    setResult(true);
  }

  function handleSelected(option) {
    setSelectedOne(option);
  }

  function formattedTime(milliseconds) {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);

    if (seconds < 10) {
      return `${minutes} : 0${seconds}`;
    }

    return `${minutes} : ${seconds}`;
  }

  return (
    <div>
      {result ? (
        <Result
          total={QuestionList.length}
          chosenOnes={markedAnswers}
          questions={QuestionList}
        />
      ) : (
        <div>
          <Navbar />
          <div className="mt-9 flex items-center justify-center">
            <svg
              fill="#fff"
              viewBox="0 0 32 32"
              data-name="Layer 8"
              id="Layer_8"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              className="h-7 w-9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <path d="M20.84,19.43h-4.5V12.29a0.5,0.5,0,0,0-1,0v7.64a0.5,0.5,0,0,0,.5.5h5A0.5,0.5,0,1,0,20.84,19.43Z"></path>
                <path d="M24.37,12.5a1.26,1.26,0,0,0,.81.3h0.11a1.26,1.26,0,0,0,.86-0.44l0.22-.26a1.27,1.27,0,0,0-.15-1.78l-2.48-2.1A1.27,1.27,0,0,0,22,8.36l-0.22.26a1.27,1.27,0,0,0,.15,1.78L22.65,11l-0.44.56a10.43,10.43,0,0,0-5.87-2.15V6.38a2.43,2.43,0,1,0-1,0V9.46A10.51,10.51,0,1,0,23,12.25l0.44-.56ZM14.41,4a1.43,1.43,0,1,1,1.43,1.43A1.43,1.43,0,0,1,14.41,4ZM25.34,19.93a9.5,9.5,0,1,1-9.5-9.5A9.51,9.51,0,0,1,25.34,19.93ZM22.5,9.26L22.72,9a0.26,0.26,0,0,1,.18-0.09h0a0.26,0.26,0,0,1,.17.06l2.48,2.1a0.27,0.27,0,0,1,0,.37l-0.22.26a0.27,0.27,0,0,1-.37,0l-2.48-2.1A0.27,0.27,0,0,1,22.5,9.26Z"></path>
              </g>
            </svg>
            <h2 className=" mt-1 font-bold">{formattedTime(time)}</h2>
          </div>
          <div className="rounded shadow-lg p-8 ml-[25%] w-1/2 flex flex-col justify-center items-center bg-purple-900 mt-[55px]">
            <h1 className="mb-3 font-semibold">
              Q{questionIndex + 1}: {QuestionList[questionIndex].title}
            </h1>
            <div className="grid w-full grid-cols-2">
              {QuestionList[questionIndex].options.map((option, index) => (
                <h1
                  key={index}
                  onClick={() => {
                    handleSelected(option);
                  }}
                  className={
                    option == selectedOne
                      ? " hover:bg-purple-950 cursor-pointer border m-2 p-2 rounded bg-purple-950"
                      : " hover:bg-purple-950 cursor-pointer border m-2 p-2 rounded"
                  }
                >
                  {option}
                </h1>
              ))}
            </div>
            {submit ? (
              <button
                onClick={handleSubmit}
                className="bg-purple-950 p-1 mt-2 w-1/2 rounded pl-5 pr-5"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="hover: bg-purple-950 p-1 mt-2 w-1/2 rounded pl-5 pr-5"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
