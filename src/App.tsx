import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { isAuthenticatedSelector } from "./store/authDuck/selector";
import {
  authActionCall,
  authSuccessActionCall,
  authFailureActionCall,
} from "./store/authDuck/actions";
// import { successMessage, errorMessage } from "./shared/Message";
import Dashboard from "./screens/Dashboard";

// interface AppProps {
//   authActionCall: Function;
//   authSuccessActionCall: Function;
//   authFailureActionCall: Function;
//   isAuthenticated: boolean;
// }

function App() {
  // const { authActionCall, isAuthenticated, authSuccessActionCall } = props;
  // const { search, pathname } = useLocation();
  // const history = useHistory();

  // const successCall = () => successMessage("Success Auth");
  // const errorCall = (data: any) => errorMessage(data.detail);

  // useEffect(() => {
  //   if (search === "?isAuthenticated=true") {
  //     authSuccessActionCall(true);
  //     history.push(pathname);
  //   }
  // }, [authSuccessActionCall, history, pathname, search]);

  // useEffect(() => {
  //   if (search !== "?isAuthenticated=true" && !isAuthenticated) {
  //     authActionCall({
  //       queryParams: "",
  //       pathParams: "",
  //       resolve: successCall,
  //       reject: errorCall,
  //     });
  //   }
  // }, [authActionCall, isAuthenticated, search]);

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  authActionCall: authActionCall,
  authSuccessActionCall: authSuccessActionCall,
  authFailureActionCall: authFailureActionCall,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
