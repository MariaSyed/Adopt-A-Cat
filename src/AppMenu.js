import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import AddCatForm from "./AddCatForm";

class MenuExampleAttached extends Component {
  state = { modalOpen: false };

  handleOpen = modalOpen => this.setState({ modalOpen });

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <Menu attached="top">
          <Menu.Menu position="right">
            <Button color="blue" onClick={() => this.handleOpen(true)}>
              Add Cat
            </Button>
          </Menu.Menu>
        </Menu>

        <AddCatForm open={modalOpen} onClose={() => this.handleOpen(false)} />
      </div>
    );
  }
}

export default MenuExampleAttached;
