import React, { useState } from 'react';
import { TextField, Button, makeStyles, Grid } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  input: {
    marginBottom: theme.spacing(3),
    width: '100%',
    maxWidth: '400px',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  textEditor: {
    margin: theme.spacing(2),
    width: '100%'
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '400px',
  }
}));

export default function RequirementForm() {
  const [projectName, setProjectName] = useState('');
  const [projectLanguage, setProjectLanguage] = useState('');
  const [files, setFiles] = useState('');
  const [textEditor, setTextEditor] = useState('');
  const [option, setOption] = useState('yes');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName || !projectLanguage) {
      alert('Please fill in all required fields');
      return;
    }
    setProjectName('');
    setProjectLanguage('');
    setFiles('');
    setTextEditor('');
    setOption('yes');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Project Name"
            id="projectName"
            value={projectName}
            variant="outlined"
            onChange={(e) => setProjectName(e.target.value)}
            className={classes.input}
          />
          <TextField
            label="Project Language"
            id="projectLanguage"
            value={projectLanguage}
            variant="outlined"
            onChange={(e) => setProjectLanguage(e.target.value)}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Files (optional)"
            id="files"
            variant="outlined"
            value={files}
            onChange={(e) => setFiles(e.target.value)}
            className={classes.input}
          />
          <FormControl component="fieldset" className={classes.radio}>
            <FormLabel component="legend">Unit test?</FormLabel>
            <RadioGroup
              aria-label="option"
              name="option"
              value={option}
              row
              onChange={(e) => setOption(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <TextField
          label="Requirements"
          id="textEditor"
          value={textEditor}
          variant="outlined"
          onChange={(e) => setTextEditor(e.target.value)}
          className={classes.textEditor}
          multiline
          rows={4}
        />
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  );
}
