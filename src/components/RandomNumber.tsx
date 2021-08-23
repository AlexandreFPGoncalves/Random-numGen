import React, { useState } from "react";
import { useRandom } from "../hooks/useRandom";

export const RandomNumber: React.FC = () => {
  const { GenerateOnClick, generatedValue, changeMin, changeMax } = useRandom();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h4 className="projectTitle">Random Number Generator</h4>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="projectResult">
              <p>
                Random Number:{" "}
                <span className="generatedValue">{generatedValue}</span>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={GenerateOnClick}>
          <div className="row">
            <div className="col-sm-6 col-lg-6 col-xl-6">
              <label className="projectLabel">Min</label>
              <br />
              <input
                type="number"
                placeholder="0"
                onChange={changeMin}
                className="projectInput"
              ></input>
            </div>

            <div className="col-sm-6 col-lg-6 col-xl-6">
              <label className="projectLabel">Max</label>
              <br />
              <input
                type="number"
                placeholder="10"
                onChange={changeMax}
                className="projectInput"
              ></input>
            </div>

            <button type="submit" className="projectBtn">
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
