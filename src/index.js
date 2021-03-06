import React from "react";
import ReactDOM from "react-dom";
import AppMenu from "./AppMenu";
import CatDashboard from "./CatDashboard";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjlxpfb0k12xk0194qhhulbyd",
  clientState: {
    defaults: {},
    resolvers: {},
    typeDefs: ``
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <AppMenu />
      <CatDashboard />
    </div>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
