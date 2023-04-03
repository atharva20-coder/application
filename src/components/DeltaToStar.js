import React, { useState } from "react";
import "../components/styles/starToDelta.css";

const DeltaToStar = () => {
  const [rab, setRa] = useState("");
  const [rbc, setRb] = useState("");
  const [rac, setRc] = useState("");
  const [starRa, setStarRa] = useState("");
  const [starRb, setStarRb] = useState("");
  const [starRc, setStarRc] = useState("");

  const handleRaChange = (event) => {
    setRa(event.target.value);
  };

  const handleRbChange = (event) => {
    setRb(event.target.value);
  };

  const handleRcChange = (event) => {
    setRc(event.target.value);
  };

  const calculateStarValues = () => {
    const deno = Number(rab) + Number(rbc) + Number(rac);
    const starRaValue = (Number(rab) * Number(rac)) / deno;
    const starRbValue = (Number(rab) * Number(rbc)) / deno;
    const starRcValue = (Number(rac) * Number(rbc)) / deno;
    setStarRa(starRaValue.toFixed(2));
    setStarRb(starRbValue.toFixed(2));
    setStarRc(starRcValue.toFixed(2));
  };

  return (
    <div>
      <h2>Delta To Star Converter</h2>
      <div className="container">
        <div className="input-column">
          <label>
            R<sub>ab</sub>:
            <input type="text" value={rab} onChange={handleRaChange} />
          </label>
          <label>
            R<sub>bc</sub>:
            <input type="text" value={rbc} onChange={handleRbChange} />
          </label>
          <label>
            R<sub>ca</sub>:
            <input type="text" value={rac} onChange={handleRcChange} />
          </label>
          <button onClick={calculateStarValues}>Calculate</button>
        </div>
        <div className="output-column">
          <label>
            Star R<sub>a</sub>:
            <input type="text" value={starRa} readOnly />
          </label>
          <label>
            Star R<sub>b</sub>:
            <input type="text" value={starRb} readOnly />
          </label>
          <label>
            Star R<sub>c</sub>:
            <input type="text" value={starRc} readOnly />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeltaToStar;
