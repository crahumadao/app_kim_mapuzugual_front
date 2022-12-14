import React from 'react';
import AppRoutes from './routes/Routes';
import { useStyles3 } from './styles/useCustomUseStyle';
import './App.css'

  
function App() {
  const classes = useStyles3;
  
  return (
    <>
      <div className={classes.folil}>
        <AppRoutes/>
      </div>
    </>
  );
}

export default App;
