import React from 'react';
import './App.css';
import Projects from "./projects/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      {/* render our Projects Component */}
      <Projects/>
      </div>
    );
  }
}

export default App;
