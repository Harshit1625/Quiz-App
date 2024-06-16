import { Outlet, Link } from "react-router-dom";

const JoinScreen = () => {
  function handleQuiz() {}
  return (
    <div className="rounded shadow-lg p-8 ml-[25%] w-1/2 flex flex-col justify-center items-center bg-purple-900 mt-[10%] p-4">
      <h1 className="font-bold text-[25px]">Test Yourself</h1>
      <p className="mt-2 mb-2">
        This quiz is designed to test user's knowledge within a
        strict 10-minute time limit. Users must answer all questions before the
        timer runs out, or they will be automatically redirected to a timeout
        screen.
      </p>
      <Link to="/quiz">
        <button
          onClick={handleQuiz}
          className="border pl-5 pr-5 p-1 rounded-sm bg-purple-950"
        >
          Start
        </button>
      </Link>
    </div>
  );
};

export default JoinScreen;
