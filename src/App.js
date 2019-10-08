import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./components/QuestionShowPage";
import QuestionIndexPage from "./components/QuestionIndexPage";
import Navbar from "./components/Navbar";
import SignInPage from "./components/SignInPage";
import { User } from "./requests";
import Spinner from "./components/Spinner";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
    // this.getUser = this.getUser.bind(this);
  }

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.getUser();
  }
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Router>
        <div className="ui container">
          <Navbar currentUser={currentUser} />
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
            <Route
              path="/sign_in"
              // component={SignInPage}
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
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
