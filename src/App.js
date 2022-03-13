import React, { Component, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import { suspenseFallbackLoader } from './components/Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';


const Dashboard = lazy(() => import("./components/dashBoard"));
const Math = lazy(() => import("./components/Math"));

toast.configure()

export class App extends Component {
  render() {
    let load = suspenseFallbackLoader()
    return (
      <div className="App">
        <Router>
          <Suspense fallback={load}>
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Dashboard {...props} />} />
              <Route exact path="/math" render={(props) => <Math {...props} />} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}
export default App
