import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Test from "./pages/Test";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:rowIndex" component={Edit} />
          <Route exact path="/view/:rowIndex" component={View} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
