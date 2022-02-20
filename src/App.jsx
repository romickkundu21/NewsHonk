import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ background: 'radial-gradient(circle, rgba(164,240,137,0.981127485173757) 4%, rgba(148,187,233,1) 100%)', paddingBottom: '10px' }}>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='linear-gradient(101deg, rgba(48,5,79,1) 0%, rgba(157,0,254,1) 43%, rgba(255,0,0,1) 100%)'
          // color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={pageSize} category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={pageSize} category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={pageSize} category="entertainment" /></Route>
          {/* <Route exact path="/general"><News setProgress={setProgress}  key="general" country="in" pageSize={pageSize} category="general" /></Route> */}
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" country="in" pageSize={pageSize} category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" country="in" pageSize={pageSize} category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={pageSize} category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={pageSize} category="technology" /></Route>

        </Switch>
      </Router>
    </div>
  )

}

export default App;
