"use client";

import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import styles from "../../styles/createquiz.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";

export default function CreateQuizPage() {
  const numQuestionsRef = useRef(1); // Using useRef to hold a numeric value, if needed
  const [numQuestions, setNumQuestions] = useState(1); // Using useState for re-render
  const [modalActive, setModalActive] = useState(false); // Using useState for re-render
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

  function toggleModal() {
    setModalActive(!modalActive);
  }

  return (
    <section className={styles.createquiz}>
      <div
        className={`${styles.modalbackdrop} ${
          modalActive ? styles.active : ""
        }`}
        onClick={toggleModal}
      >
        <div className={styles.loadingimage}>
          <img src="/lightbulboff.png" alt="EduCraft Logo" />
        </div>

        <div className={styles.loadingimage}>
          <img className={styles.lightbulbon} src="/lightbulbon.png" alt="EduCraft Logo" />
        </div>

        <div className={styles.quizreadytext}>
            Your Quiz is Ready!
        </div>
        
      </div>
      <div>
        <TextField
          id="filled-basic"
          label="Quiz Title"
          maxRows={4}
          variant="filled"
          style={{ width: "400px" }}
        />
      </div>

      <div className={styles.numberofQuestions}>
        <h4> Number of Questions</h4>
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
      </div>
      <div>
        <FormControl variant="filled" sx={{ minWidth: 150 }}>
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
            <MenuItem value={"e"}>K</MenuItem>
            <MenuItem value={"e"}>1</MenuItem>
            <MenuItem value={"e"}>2</MenuItem>
            <MenuItem value={"e"}>3</MenuItem>
            <MenuItem value={"e"}>4</MenuItem>
            <MenuItem value={"m"}>5</MenuItem>
            <MenuItem value={"e"}>6</MenuItem>
            <MenuItem value={"h"}>9-12</MenuItem>
            <MenuItem value={"C"}>College</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.fileupload}>
        <button className={styles.uploadbutton}> Upload File</button>\
        <UploadFile />
        <TextField
          id="filled-textarea"
          label="Quiz Content"
          placeholder="Placeholder"
          multiline
          minRows={10}
          variant="filled"
          style={{ width: "600px" }}
        />
      </div>

      <div>
        <button className={styles.createbutton} onClick={toggleModal}>
          Create Quiz
        </button>
      </div>
    </section>
  );
}

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  console.log(selectedFile);
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate &&
              selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}> Upload File</button>
      {fileData()}
    </div>
  );
}
