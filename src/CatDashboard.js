import React from "react";
import { Query } from "react-apollo";
import { GET_CATS } from "./queries";
import CatCard from "./CatCard";
import { Card } from "semantic-ui-react";

export default () => (
  <Query query={GET_CATS}>
    {({ loading, error, data }) => {
      if (loading) return "loading...";
      if (error) return `Error: ${error}`;

      return (
        <Card.Group style={{ marginTop: 20 }}>
          {data.allCats.map(cat => <CatCard key={cat.id} cat={cat} />)}
        </Card.Group>
      );
    }}
  </Query>
);
