import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Greeting from "./pages/Greeting";
import Picture from "./components/Picture";
import NavTabs from "./components/NavTabs";
import Mood from "./components/Mood"
import Dashboard from "./pages/Dashboard";

// import Chart from './components/Chart';
// import CalendarPage from './components/Calendar';
// import Dashboard from "./components/Dashboard";
// import Upload from "./components/Upload";
// import Logout from "./components/Logout";
// import Footer from "./components/Footer";


const httpLink = createHttpLink({
  uri:"/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  

  // the thought is that Home, Login, Signup & Greeting will have their own links i.e. a unique URL .. thinking Dashboard might too? that way user can bookmark, etc. & also we wont have to worry about page reloading & leaving these specific pages
  // right now these 'Links' are set up as pages .. the 'Dashboard' is called 'Journal' at the moment but we can change that depending on how we want it presented to the user
  // lets go to Home page from here...
  return (
    
    <ApolloProvider client={client} >
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <NavTabs />
          <Picture /> 
          <Mood />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/greeting">
              <Greeting />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </div>
          {/* <Chart />
          <CalendarPage /> */}
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
