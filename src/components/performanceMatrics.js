import React, { useState } from "react";
import "../components/styles/performance.css";

const PerformanceMetrics = () => {
  const [numerator, setNumerator] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [performanceMetrics, setPerformanceMetrics] = useState(null);

  const handleNumeratorChange = (event) => {
    const value = event.target.value;
    setNumerator(value);
  };

  const handleDenominator1Change = (event) => {
    const value = event.target.value;
    setDenominator1(value);
  };

  const handleDenominator2Change = (event) => {
    const value = event.target.value;
    setDenominator2(value);
  };

  const handleCalculate = () => {
    const num = parseInt(numerator);
    const den = [1, parseInt(denominator1), parseInt(denominator2)];

    const { wN, dampingRatio, peakTime, maxOvershoot } =
      calculatePerformanceMetrics(num, den);

    setPerformanceMetrics({
      naturalFrequency: wN.toFixed(2),
      dampingRatio: dampingRatio.toFixed(2),
      peakTime: peakTime.toFixed(2),
      maxOvershoot: maxOvershoot.toFixed(2),
    });
  };

  return (
    <div className="performance-metrics">
      <h2>Performance Metrics Calculator</h2>
      <label>
        Numerator:
        <input type="text" value={numerator} onChange={handleNumeratorChange} />
      </label>
      <br />
      <label>
        Denominator: S<sup>2</sup>
        <input
          type="text"
          value={denominator1}
          onChange={handleDenominator1Change}
          className="input-field"
        />
        S +{" "}
        <input
          type="text"
          value={denominator2}
          onChange={handleDenominator2Change}
          className="input-field"
        />
        + W<sub>n</sub>
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {performanceMetrics && (
        <div>
          <h3>Performance Metrics:</h3>
          <p>Natural Frequency: {performanceMetrics.naturalFrequency} rad/s</p>
          <p>Damping Ratio: {performanceMetrics.dampingRatio}</p>
          <p>Peak Time: {performanceMetrics.peakTime} s</p>
          <p>Maximum Overshoot: {performanceMetrics.maxOvershoot}%</p>
        </div>
      )}
    </div>
  );
};

function calculatePerformanceMetrics(numerator, denominator) {
  const wN = Math.sqrt(numerator);
  const dampingRatio = denominator[1] / (2 * wN);
  const peakTime = Math.PI / (wN * Math.sqrt(1 - dampingRatio ** 2));
  const maxOvershoot =
    Math.exp(-(Math.PI * dampingRatio) / Math.sqrt(1 - dampingRatio ** 2)) *
    100;
  return { wN, dampingRatio, peakTime, maxOvershoot };
}

export default PerformanceMetrics;
