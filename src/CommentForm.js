import React from "react";
import { Icon } from "semantic-ui-react";
import { withState } from "recompose";
import { GET_CATS, ADD_COMMENT_FOR_CAT } from "./queries";
import { Mutation } from "react-apollo";

// const updateCache = (cache, { data: { createComment } }) => {
//   // Retrieve all cats from cache
//   const { allCats } = cache.readQuery({ query: GET_CATS });

//   // Update the cat owner
//   allCats.forEach(cat => {
//     if (cat.id === createComment.cat.id) {
//       cat.comments.concat(createComment);
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

const enhance = withState("comment", "setComment", "");

export default enhance(({ id, comment, setComment }) => (
  <form
    className="ui large transparent left icon input"
    onSubmit={e => {
      e.preventDefault();
      setComment("");
    }}
  >
    <Icon name={"comment"} />
    <input
      type="text"
      placeholder="Add Comment..."
      value={comment}
      onChange={e => setComment(e.target.value)}
    />
  </form>
));
