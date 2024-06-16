/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const Result = ({total , chosenOnes , questions}) => {
  let correct = 0;
  questions.forEach((question , index)=> {
    if(question.answer == chosenOnes[index]){
      correct++;
    }
  })
  const percentage = (correct / total) * 100;

  return (
    <div>
          <Navbar />
          <div className="rounded shadow-lg p-8 ml-[25%] w-1/2 flex flex-col justify-center items-center bg-purple-900 mt-[10%]">
            <h1 className="font-bold ml-5 text-[20px]">Results :-</h1>
            <h1 className="font-bold ml-8 text-[50px] mt-5 mb-5">{percentage}%</h1>
            <h3>You {correct} scored out of {total}</h3>
            <Link to='/'>
            <button className="bg-purple-950 p-1 mt-8 rounded pl-5 pr-5">Retry</button>
            </Link>
          </div>
        </div>
  )
}

export default Result
