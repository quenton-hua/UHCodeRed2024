
import React from "react";
import TextField from '@mui/material/TextField';


export default function CreateQuizPage() {
  return (
    <div>
      <h1>Create Quiz</h1>
      <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
    </div>
  );
}