import React, { useState } from 'react';

function ThreePointEstimation() {
  const [optimistic, setOptimistic] = useState(0);
  const [mostLikely, setMostLikely] = useState(0);
  const [pessimistic, setPessimistic] = useState(0);
  const [expectedValue, setExpectedValue] = useState(0);

  const calculateExpectedValue = () => {
    const e = (Number(optimistic) + (4 * Number(mostLikely)) + Number(pessimistic)) / 6;
    setExpectedValue(e);
  };

  return (
    <div>
      <label>Optimistic:</label>
      <input
        type="number"
        value={optimistic}
        onChange={(e) => setOptimistic(Number(e.target.value))}
      />
      <br />
      <label>Most Likely:</label>
      <input
        type="number"
        value={mostLikely}
        onChange={(e) => setMostLikely(Number(e.target.value))}
      />
      <br />
      <label>Pessimistic:</label>
      <input
        type="number"
        value={pessimistic}
        onChange={(e) => setPessimistic(Number(e.target.value))}
      />
      <br />
      <button onClick={calculateExpectedValue}>Calculate</button>
      <p>Expected Value: {expectedValue}</p>
    </div>
  );
}

export default ThreePointEstimation;
