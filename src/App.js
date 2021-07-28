import style from './App.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'

function App() {
  return (
    <div className="App" id={style.main}>
      <TextField
          id="url"
          label="URL"
          style={{ margin: 8 }}
          placeholder="Write the URL to be converted"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button>GENERATE!</Button>
    </div>
  );
}

export default App;
