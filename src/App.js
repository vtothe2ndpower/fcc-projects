import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ResWebDes from './components/ResWebDes';
import AlgDataStructures from './components/AlgDataStructures';
import FrontEndLibraries from './components/FrontEndLibraries';
import DataVisualization from './components/DataVisualization';
import APIs from './components/APIs';
import QualityAssurance from './components/QualityAssurance';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route 
            exact path="/" component={Home} 
          />
          <Route 
            exact path="/responsive-web-design" component={ResWebDes} 
          />
          <Route 
            exact path="/js-algorithms-&-data-structures" component={AlgDataStructures} 
          />
          <Route 
            exact path="/front-end-libraries" component={FrontEndLibraries} 
          />
          />
          <Route 
            exact path="/data-visualization" component={DataVisualization} 
          />
          <Route 
            exact path="/apis-&-microservices" component={APIs} 
          />
          <Route 
            exact path="/quality-assurance" component={QualityAssurance} 
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    );
  }
}

export default App;
