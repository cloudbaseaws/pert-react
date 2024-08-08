import React from 'react';
import MathJax from 'mathjax-react';

function FormulaDisplay() {
  return (
    <MathJax math={`\\(TE = \\frac{O + 4M + P}{6}\\)`} />
  );
}

export default FormulaDisplay;
