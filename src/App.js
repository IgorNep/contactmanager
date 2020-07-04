import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Layout/Header";
import Provider from "./context";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
