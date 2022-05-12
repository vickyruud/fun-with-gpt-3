import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

function Form() {

  const [prompt, setPrompt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);
  }
 

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <TextField
        id="name-input"
        name="prompt"
        label="Prompt"
        type="text"
        value={prompt}
        sx={{color: 'white'}}
        onChange={(e) => {setPrompt(e.target.value)}}
        />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default Form