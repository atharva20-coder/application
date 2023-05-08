import React, { useState } from "react";
import "../components/styles/transformerConversion.css";

function TransformerImpedanceConversion() {
  const [type, setType] = useState("PrimaryToSecondary");
  const [zP, setZP] = useState("");
  const [zS, setZS] = useState("");
  const [n, setN] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleZPChange = (event) => {
    setZP(event.target.value);
  };

  const handleZSChange = (event) => {
    setZS(event.target.value);
  };

  const handleNChange = (event) => {
    setN(event.target.value);
  };

  const convertZ = () => {
    if (type === "PrimaryToSecondary") {
      // Convert primary referred impedances to secondary referred
      const zSNew = zP / (n * n);
      setZS(zSNew);
    } else if (type === "SecondaryToPrimary") {
      // Convert secondary referred impedances to primary referred
      const zPNew = zS * (n * n);
      setZP(zPNew);
    }
  };

  return (
    <div>
      <h2>Transformer (Primary ⇔ Secondary) Impedance Conversion</h2>
      <div>
        <label>Refer:</label>
        <select value={type} onChange={handleTypeChange}>
          <option value="PrimaryToSecondary">Primary to Secondary</option>
          <option value="SecondaryToPrimary">Secondary to Primary</option>
        </select>
      </div>
      <div>
        <label>Turns ratio:</label>
        <input type="text" value={n} onChange={handleNChange} />
      </div>
      <div>
        <label>Zp:</label>
        <input
          type="text"
          value={zP}
          onChange={handleZPChange}
          disabled={type === "SecondaryToPrimary"}
        />
      </div>
      <div>
        <label>Zs:</label>
        <input
          type="text"
          value={zS}
          onChange={handleZSChange}
          disabled={type === "PrimaryToSecondary"}
        />
      </div>
      <div>
        <button onClick={convertZ}>Convert Z</button>
      </div>
    </div>
  );
}

export default TransformerImpedanceConversion;
