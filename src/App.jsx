import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initial: 1000,
    annual: 1200,
    expected: 6,
    duration: 10,
  });

  function handleChange(parameter, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [parameter]: newValue,
      };
    });
  }

  const validData = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!validData && (
        <p className="center">Please enter a duration bigger than zero!!!</p>
      )}
      {validData && <Results input={userInput} />}
    </>
  );
}

export default App;
