import React from 'react';
import Container from '@material-ui/core/Container';
import Numbers from './Components/Numbers/numbers'
import Operators from './Components/Operators/operators';
import Display from './Components/Display/display';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Display />
        <Numbers>
          <Operators />
        </Numbers>
      </Container>
    </div>
  );
}

export default App;
