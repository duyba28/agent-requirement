import './App.css';
import RequirementForm from './components/RequirementForm';
import Typography from '@material-ui/core/Typography'
import React from 'react';

function App() {
  return (
    <div className="App">
      <div style={{ background: 'lightblue', padding: '24px', borderRadius: '12px' }}>
      <Typography variant="h6" style={{marginBottom: '12px'}}>
        Custom Agent Requirement
      </Typography>
      <RequirementForm />
    </div>
    </div>
  );
}

export default App;