import { useState } from 'react';
import styles from './App.module.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'

function App() {

  const [field, setField] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [call, setcall] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    setFieldError(false)

    if (field === "")  {
      setFieldError(true)
    }  else {
      console.log(field)
      setcall('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + field)
      console.log(call)
    }
  }

  return (
    <div className="App" id={styles.div}>
      <TextField
        onChange = {(e) => setField(e.target.value)}
        id="url"
        label="URL"
        style={{ margin: 8,}}
        margin="normal"
        variant="outlined"
        error={fieldError}
        fullWidth
      />
      <Button
      onClick = {handleSubmit}
      >
        GENERATE!
      </Button>
      <img src = {call} alt = "" width = {250} height = {250}/>
    </div>
  );
}

export default App;
