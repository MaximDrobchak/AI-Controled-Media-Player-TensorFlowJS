import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ApolloClient from "apollo-boost";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import App from "./App";
import Firebase, { FirebaseContext } from "./firebase";

import { resolvers, typeDefs } from "./resolvers";

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "foo":
        console.log(object);
        return object.key; // use the `key` field as the identifier
      case "bar":
        console.log(object);
        return `bar:${object.blah}`; // append `bar` to the `blah` field as the identifier
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  }),
  resolvers,
  typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});
// const IS_LOGGED_IN = gql`
//   query IsUserLoggedIn {
//     isLoggedIn @client
//   }
// `;

ReactDOM.render(
  <ApolloProvider client={client}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Router>
    </FirebaseContext.Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
