import React, { useState, useEffect, useCallback } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Calculations.css";

const Calculations = () => {
  const [inputs, setInputs] = useState([{ id: 0, name: "", consumption: "", confirmed: false }]);
  const [confirmedInputs, setConfirmedInputs] = useState([]);
  const [sunHours, setSunHours] = useState(null);
  const [dailyKWh, setDailyKWh] = useState(0);
  const [dcSystemSize, setDcSystemSize] = useState(null);

  useEffect(() => {
    const savedInputs = JSON.parse(localStorage.getItem("inputs"));
    const savedConfirmedInputs = JSON.parse(
      localStorage.getItem("confirmedInputs")
    );
    const savedSunHours = localStorage.getItem("sunHours");
    if (savedInputs) setInputs(savedInputs);
    if (savedConfirmedInputs) setConfirmedInputs(savedConfirmedInputs);
    if (savedSunHours) setSunHours(savedSunHours);
  }, []);

  const calculateDailyKWh = useCallback(() => {
    const totalKWh = confirmedInputs.reduce(
      (sum, input) => sum + (parseFloat(input.consumption) || 0),
      0
    );
    setDailyKWh(totalKWh);
  }, [confirmedInputs]);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("confirmedInputs", JSON.stringify(confirmedInputs));
    localStorage.setItem("sunHours", sunHours);
    calculateDailyKWh();
  }, [inputs, confirmedInputs, sunHours, calculateDailyKWh]);

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length, name: "", consumption: "", confirmed: false },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newInputs = inputs.map((input, i) =>
      i === index
        ? {
            ...input,
            [field]: field === "consumption" ? parseFloat(value) : value,
          }
        : input
    );
    setInputs(newInputs);
  };

  const handleConfirmInput = (index) => {
    const inputToConfirm = inputs[index];
    if (inputToConfirm.name && inputToConfirm.consumption) {
      setConfirmedInputs([...confirmedInputs, inputToConfirm]);
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    } else {
      alert("Please enter a valid name and consumption.");
    }
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleRemoveConfirmedInput = (index) => {
    const newConfirmedInputs = confirmedInputs.filter((_, i) => i !== index);
    setConfirmedInputs(newConfirmedInputs);
  };

  const handleSunHoursChange = (e) => {
    setSunHours(e.target.value);
  };

  const handleCalculate = () => {
    if (sunHours && dailyKWh) {
      const dcSize = (dailyKWh / parseFloat(sunHours)) * 1.15;
      setDcSystemSize(dcSize.toFixed(2));
    } else {
      alert("Please enter all required values.");
    }
  };

  return (
    <div className="calculation-section">
      <div className="calculation-container">
        <h2 className="header">Solar Panel On-Grid Calculations</h2>
        <TransitionGroup>
        {inputs.map((input, index) => (
          <CSSTransition key={input.id} timeout={500} classNames="fade">
            <div className="inputContainer">
              <label className="label">
                Appliance Name:
                <input
                  type="text"
                  value={input.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  className="input"
                />
              </label>
              <label className="label">
                Consumption (kWh):
                <input
                  type="number"
                  value={input.consumption}
                  onChange={(e) =>
                    handleInputChange(index, "consumption", e.target.value)
                  }
                  className="input"
                />
              </label>
              <div className="appliance-btn-wrap">
                <button
                  onClick={() => handleConfirmInput(index)}
                  className="confirmButton"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleRemoveInput(index)}
                  className="removeButton"
                >
                  Remove
                </button>
              </div>
            </div>
          </CSSTransition>
        ))}
        </TransitionGroup>
        <button onClick={handleAddInput} className="addButton">
          Add Appliance
        </button>
        <div className="inputContainer">
          <label className="label">
            Average Sun Hours:
            <input
              type="number"
              value={sunHours}
              onChange={handleSunHoursChange}
              className="input"
            />
          </label>
        </div>

        {confirmedInputs.length > 0 && (
          <div className="confirmedContainer">
            <h3>Confirmed Appliances:</h3>
            <TransitionGroup>
            {confirmedInputs.map((input, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div className="confirmedItem">
                  <p>
                    <strong>{input.name}:</strong> {input.consumption} kWh
                    <button
                      onClick={() => handleRemoveConfirmedInput(index)}
                      className="removeButton"
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </CSSTransition>
            ))}
            </TransitionGroup>
          </div>
        )}
        <button onClick={handleCalculate} className="calculateButton">
          Calculate
        </button>
        {dcSystemSize && (
          <div className="resultContainer">
            <h3 className="result">DC System Size: {dcSystemSize} kW</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculations;
