import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import PageNotFound from "./components/page/PageNotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/Add" component={AddContact} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/Login" component={Login}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
