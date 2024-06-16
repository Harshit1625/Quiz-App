import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Result from "./components/Result";
import Question from "./components/Question";
import OutOfTime from "./components/OutOfTime";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/out-of-time" element={<OutOfTime />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
