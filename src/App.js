import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarToDelta from "./components/StarToDelta";
import DeltaToStar from "./components/DeltaToStar";
import PerformanceMetrics from "./components/performanceMatrics";
import DecToHexOctBin2Comp from "./components/DecToHexOctBin2Comp";
import TransformerConversion from "./components/transformerConversion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="left">
          <nav>
            <ul>
              <li>
                <a className="btn-star-to-delta" href="/star-to-delta">
                  Star to Delta
                </a>
              </li>
              <li>
                <a className="btn-delta-to-star" href="/delta-to-star">
                  Delta to Star
                </a>
              </li>
              <li>
                <a
                  className="btn-transformerDesign"
                  href="/transformerConversion"
                >
                  Primary ⇔ Secondary converter
                </a>
              </li>
              <li>
                <a
                  className="btn-performance-metrics"
                  href="/performance-metrics"
                >
                  Performance Metrics
                </a>
              </li>
              <li>
                <a
                  className="btn-dec-to-hex-oct-bin-2comp"
                  href="/dec-to-hex-oct-bin-2comp"
                >
                  Decimal to Hex/Oct/Bin/2's Comp
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <h1>Math Functions</h1>
          <Routes>
            <Route path="/star-to-delta" element={<StarToDelta />} />
            <Route
              path="/dec-to-hex-oct-bin-2comp"
              element={<DecToHexOctBin2Comp />}
            />
            <Route path="/delta-to-star" element={<DeltaToStar />} />
            <Route
              path="/performance-metrics"
              element={<PerformanceMetrics />}
            />
            <Route
              path="/transformerConversion"
              element={<TransformerConversion />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
