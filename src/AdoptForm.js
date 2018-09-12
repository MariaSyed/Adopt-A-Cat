import React from "react";
import { withState } from "recompose";
import { Input, Button } from "semantic-ui-react";
import { ADOPT_CAT, GET_CATS } from "./queries";
import { Mutation } from "react-apollo";

// const updateCache = (cache, { data: { updateCat } }) => {
//   // Retrieve all cats from cache
//   const { allCats } = cache.readQuery({ query: GET_CATS });

//   // Update the cat owner
//   allCats.forEach(cat => {
//     if (cat.id === updateCat.id) {
//       cat.owner = updateCat.owner;
//     }
//   });

//   // Write new updated cats to cache
//   cache.writeQuery({
//     query: GET_CATS,
//     data: {
//       allCats
//     }
//   });
// };

const enhance = withState("name", "setName", "");
export default enhance(({ name, setName, disabled, id }) => (
  <form
    style={styles.adoptForm}
    onSubmit={e => {
      e.preventDefault();
      setName("");
    }}
  >
    <Input
      placeholder="Your name"
      style={{ width: "65%" }}
      disabled={disabled}
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <Button basic color={disabled ? "grey" : "green"} disabled={disabled}>
      Adopt
    </Button>
  </form>
));

const styles = {
  adoptForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between"
  }
};
