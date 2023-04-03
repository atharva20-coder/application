import React, { useState } from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../components/styles/decimalConverter.css";
const DecToHexOctBin2Comp = () => {
  const [decimal, setDecimal] = useState("");
  const [hex, setHex] = useState("");
  const [octal, setOctal] = useState("");
  const [binary, setBinary] = useState("");
  const [twosComplement, setTwosComplement] = useState("");

  const handleDecimalChange = (event) => {
    const value = event.target.value;
    setDecimal(value);

    // Calculate hexadecimal representation
    const hexValue = parseInt(value, 10).toString(16);
    setHex(hexValue.toUpperCase());

    // Calculate octal representation
    const octalValue = parseInt(value, 10).toString(8);
    setOctal(octalValue);

    // Calculate binary representation
    const binaryValue = parseInt(value, 10).toString(2);
    setBinary(binaryValue);

    // Calculate two's complement representation
    const twosComplementValue = (parseInt(value, 10) >>> 0).toString(2);
    setTwosComplement(twosComplementValue);
  };

  return (
    <div className="dec-to-hex-oct-bin-2comp">
      <h2>Decimal to Hex/Octal/Binary/Two's Complement Converter</h2>
      <label>
        Decimal:
        <input type="text" value={decimal} onChange={handleDecimalChange} />
      </label>
      <br />
      <label>
        Hexadecimal:
        <input type="text" value={hex} readOnly />
      </label>
      <br />
      <label>
        Octal:
        <input type="text" value={octal} readOnly />
      </label>
      <br />
      <label>
        Binary:
        <input type="text" value={binary} readOnly />
      </label>
      <br />
      <label>
        Two's Complement:
        <input type="text" value={twosComplement} readOnly />
      </label>
    </div>
  );
};

export default DecToHexOctBin2Comp;
