import React, { useEffect, useState } from "react";
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
import Dashboard from "./pages/Dashboard";
import NavTabs from "./components/NavTabs";
import Journal from "./pages/Journal";
// import Mood from "./components/Mood"

import moment from 'moment';


// import Chart from './components/Chart';
// import Upload from "./components/Upload";
// import Logout from "./components/Logout";
// import Footer from "./components/Footer";


const httpLink = createHttpLink({
  uri: "/graphql",
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
  

  // const [color, setColor] = useState('');

  const [morning, setMorning] = useState(false);
  const [day, setDay] = useState(false);
  const [evening, setEvening] = useState(false);

  const styles = {
    morning: {
      backgroundColor: '#e6d192ff',
      height: "100vh",
      color: '#ac3b12',
    },
    day: {
      backgroundColor: '#b3d993ff',
      height: "100vh",
      color: '#579620ff',
    },
    evening: {
      backgroundColor: 'lightblue',
      height: "100vh",
      color: '#2455a2',
    }
  };

  useEffect (() => {
    if (window.moment().format('H') < 9) {

      handleSetMorning()
  
    } else if (window.moment().format('H') < 17) {
  
      handleSetDay()
  
    } else {
  
      handleSetEvening()
  
    }
  })

  const handleSetMorning = () => {
    setMorning(true)
  }

  const handleSetDay = () => {
    setDay(true)
  }

  const handleSetEvening = () => {
    setEvening(true)
  }

  return (

    <ApolloProvider client={client} >
      <Router>
        <div className="flex-column justify-flex-start min-100-vh" style={morning ? styles.morning : day ? styles.day : styles.evening}>
          <NavTabs />
          {/* <Picture />  */}
          <div className="container-fluid">
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
              {/* <Mood/> */}
            </Route>
            <Route exact path="/journal">
              <Journal />
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
