"use client";

import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import styles from "../../styles/createquiz.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CreateQuizPage() {
  const numQuestionsRef = useRef(1); // Using useRef to hold a numeric value, if needed
  const [numQuestions, setNumQuestions] = useState(1); // Using useState for re-render
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  // Function to update both ref and state
  const handleSliderChange = (event, newValue) => {
    numQuestionsRef.current = newValue; // Update ref
    setNumQuestions(newValue); // Update state to trigger re-render
  };

  // Function to provide accessible text for the slider's current value
  const getAriaValueText = (value) =>
    `${value} question${value > 1 ? "s" : ""}`;

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 15,
      label: "15",
    },
  ];

  return (
    <div className={styles.createquiz}>
      <TextField
        id="filled-basic"
        label="Quiz Title"
        maxRows={4}
        variant="filled"
      />

      <div className={styles.sliderDiv}>
        <Slider
          aria-label="Number of Questions"
          defaultValue={1}
          value={numQuestions} // Controlled component
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={15}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-filled-label">
          Grade Level
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"e"}>K-5</MenuItem>
          <MenuItem value={"m"}>6-8</MenuItem>
          <MenuItem value={"h"}>9-12</MenuItem>
          <MenuItem value={"C"}>College</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="filled-basic"
        label="Quiz Title"
        multiline
        rows={4}
        variant="filled"
      />


    </div>
  );
}
