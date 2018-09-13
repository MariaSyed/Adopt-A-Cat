import React from "react";
import { Icon } from "semantic-ui-react";
import { ADOPT_CAT } from "./queries";
import { Mutation } from "react-apollo";

export default ({ id }) => (
  <Mutation mutation={ADOPT_CAT}>
    {(updateCat, attrs = {}) => (
      <Icon
        style={{ cursor: "pointer" }}
        name={attrs.loading ? "spinner" : "close"}
        onClick={() => updateCat({ variables: { id, owner: null } })}
      />
    )}
  </Mutation>
);
