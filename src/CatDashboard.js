import React from "react";
import { Query } from "react-apollo";
import { GET_CATS } from "./queries";
import CatCard from "./CatCard";
import { Card } from "semantic-ui-react";

export default () => (
  <Card.Group style={{ marginTop: 20 }}>
    <CatCard
      cat={{
        id: "fake-id",
        name: "Mr. Cat",
        breed: "tabby",
        owner: null,
        comments: [],
        age: 1,
        photoUrl:
          "http://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg"
      }}
    />
  </Card.Group>
);
