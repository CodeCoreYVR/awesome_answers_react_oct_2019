import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./components/QuestionShowPage";
import QuestionIndexPage from "./components/QuestionIndexPage";
import Navbar from "./components/Navbar";
import { Session } from "./requests";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    // This gives us a cookie that represents us being logged in
    // Now, when we make POST requests to the server to make a Question
    // we will be authorized/authenticated
    // This is a HACKY method until we learn about Authentication
    // in React
    Session.create({
      email: "hano@codecore.com",
      password: "supersecret"
    }).then(user => {
      this.setState({
        currentUser: user
      });
    });
  }
  render() {
    return (
      <Router>
        <div className="ui container">
          <Navbar />
          {/* Switch allows for one Route component to render its
				  component prop. 
				  If there are multiple that could match that path,
				  then the first one that matches is the one that is 
				  selected (that one that wins). What that means is,
				  the order of your routes matter when using switch
			   */}
          <Switch>
            <Route path="/" exact component={QuestionIndexPage} />
            <Route path="/questions" exact component={QuestionIndexPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// A react Component is a function that returns a React Element.
// By convention, react components use PascalCase naming
// Components whose names does not begin with a capital letter
// will be interpreted as plain HTML tags

export default App;
