import { useState } from "react";

const TextRepeaterButton = () => {
  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  }

  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      {textArray}
    </button>
  );
};

export default TextRepeaterButton;
