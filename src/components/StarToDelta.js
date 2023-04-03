import React, { useState } from "react";
import "../components/styles/starToDelta.css";

const StarToDelta = () => {
  const [ra, setRa] = useState("");
  const [rb, setRb] = useState("");
  const [rc, setRc] = useState("");
  const [deltaRab, setDeltaRab] = useState("");
  const [deltaRbc, setDeltaRbc] = useState("");
  const [deltaRca, setDeltaRca] = useState("");

  const handleRaChange = (event) => {
    setRa(event.target.value);
  };

  const handleRbChange = (event) => {
    setRb(event.target.value);
  };

  const handleRcChange = (event) => {
    setRc(event.target.value);
  };

  const calculateDeltaValues = () => {
    const deltaRabValue =
      Number(ra) + Number(rb) + (Number(ra) * Number(rb)) / Number(rc);
    const deltaRbcValue =
      Number(rb) + Number(rc) + (Number(rb) * Number(rc)) / Number(ra);
    const deltaRcaValue =
      Number(rc) + Number(ra) + (Number(rc) * Number(ra)) / Number(rb);
    setDeltaRab(deltaRabValue.toFixed(2));
    setDeltaRbc(deltaRbcValue.toFixed(2));
    setDeltaRca(deltaRcaValue.toFixed(2));
  };

  return (
    <div>
      <h2>Star to Delta Converter</h2>
      <div class="container">
        <div class="input-column">
          <label>
            R<sub>a</sub>:
            <input type="text" value={ra} onChange={handleRaChange} />
          </label>
          <label>
            R<sub>b</sub>:
            <input type="text" value={rb} onChange={handleRbChange} />
          </label>
          <label>
            R<sub>c</sub>:
            <input type="text" value={rc} onChange={handleRcChange} />
          </label>
          <button onClick={calculateDeltaValues}>Calculate</button>
        </div>
        <div class="output-column">
          <label>
            Delta R<sub>ab</sub>:
            <input type="text" value={deltaRab} readOnly />
          </label>
          <label>
            Delta R<sub>bc</sub>:
            <input type="text" value={deltaRbc} readOnly />
          </label>
          <label>
            Delta R<sub>ca</sub>:
            <input type="text" value={deltaRca} readOnly />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StarToDelta;
