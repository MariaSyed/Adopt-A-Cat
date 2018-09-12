import React from "react";
import { compose, withState } from "recompose";
import { ADD_CAT, GET_CATS } from "./queries";
import { Mutation } from "react-apollo";
import { Button, Header, Modal, Icon, Form, Message } from "semantic-ui-react";

const updateCache = (cache, { data: { createCat } }) => {
  const { allCats } = cache.readQuery({ query: GET_CATS });

  cache.writeQuery({
    query: GET_CATS,
    data: {
      allCats: allCats.concat(createCat)
    }
  });
};

const enhance = compose(
  withState("photoUrl", "setPhotoUrl", ""),
  withState("name", "setName", ""),
  withState("breed", "setBreed", ""),
  withState("age", "setAge", 0),
  withState("error", "setError", "")
);

const ModalModalExample = enhance(
  ({
    open,
    onClose,
    photoUrl,
    setPhotoUrl,
    name,
    setName,
    age,
    setAge,
    breed,
    setBreed,
    error,
    setError
  }) => (
    <Mutation mutation={ADD_CAT} update={updateCache}>
      {createCat => (
        <Modal open={open} onClose={onClose} style={{ top: "10%" }}>
          <Header icon="plus" content="Add Cat" />
          <Modal.Content>
            <Form>
              <Form.Input
                label="Photo URL"
                value={photoUrl}
                onChange={e => setPhotoUrl(e.target.value)}
              />
              <Form.Input
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Form.Input
                label="Breed"
                value={breed}
                onChange={e => setBreed(e.target.value)}
              />
              <Form.Input
                label="Age"
                type="number"
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </Form>

            {error && <Message error content={error} />}
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              inverted
              onClick={e => {
                if (photoUrl && name && breed && age) {
                  age = Number(age);
                  createCat({ variables: { photoUrl, name, breed, age } });
                  onClose();
                } else {
                  setError("All fields required");
                }
              }}
            >
              <Icon name="checkmark" /> Create
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </Mutation>
  )
);

export default ModalModalExample;
