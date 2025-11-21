function FinishScreen({ points, maxPossiblePoints, highscore,dispatch }) {
  const safeMax = maxPossiblePoints || 0;
  const percentage = safeMax > 0 ? (points / safeMax) * 100 : 0;

  let emoji = "";
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "☺️";
  else if (percentage > 0) emoji = "🤔";
  else emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        You scored <span>{emoji}</span>
        <strong>{points}</strong> out of {safeMax} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart quiz
    </button>
      {/* if(index === numQuestions-1) <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>Restart the quiz</button> */}
    </>
  );
}

export default FinishScreen;
