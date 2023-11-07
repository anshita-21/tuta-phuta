import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./CarPlateChecker.css"; // Import the enhanced CSS file

const CarPlateChecker = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState("");

  const handlePlateNumberChange = (event) => {
    setPlateNumber(event.target.value);
  };

  const checkPlateNumber = () => {
    const lastTwoDigits = parseInt(plateNumber.slice(-2), 10);
    const isEven = lastTwoDigits % 2 === 0;
    setResult(isEven ? "Even Scheme" : "Odd Scheme");
  };

  return (
    <div className="car-plate-frame">
      <div className="car-plate-container">
        <Typography variant="h4" className="heading">
          Car Plate Number Checker
        </Typography>
        <TextField
          type="text"
          value={plateNumber}
          onChange={handlePlateNumberChange}
          label="Enter Car Plate Number"
          variant="outlined"
          className="input"
          placeholder="e.g., ABC123"
        />
        <Button onClick={checkPlateNumber} variant="contained" className="button">
          Check
        </Button>
        <Typography variant="body1" className={`result ${result && "show"}`}>
          {result}
        </Typography>

        {/* Add a Link to navigate to the Highlight component */}
        <Link to="/home" className="link">
          Go to Highlight
        </Link>
      </div>
    </div>
  );
};

export default CarPlateChecker;
