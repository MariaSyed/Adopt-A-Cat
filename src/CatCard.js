import React from "react";
import { Card, Icon, Image, List } from "semantic-ui-react";
import AdoptForm from "./AdoptForm";
import CommentForm from "./CommentForm";

class CatCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { expanded } = this.state;
    const { cat } = this.props;
    const { id, photoUrl, name, age, breed, owner, comments = [] } = cat;

    return (
      <Card style={styles.card} raised>
        <Image style={styles.media} src={photoUrl} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{age} years old</Card.Meta>
          <Card.Description>
            <p>Breed: {breed}</p>
            <p>Owner: {owner}</p>
          </Card.Description>
        </Card.Content>

        <Card.Content>
          <AdoptForm id={id} disabled={owner !== null} />
        </Card.Content>

        <Card.Content extra>
          <a onClick={this.handleExpandClick}>
            <Icon name="comment outline" />
            {comments.length} comments
          </a>

          {expanded && (
            <List divided relaxed>
              {comments.map(comment => (
                <List.Item>
                  <List.Content>
                    <List.Header>{comment.author}</List.Header>
                    {comment.content}
                  </List.Content>
                </List.Item>
              ))}
            </List>
          )}
        </Card.Content>
        {expanded && (
          <Card.Content extra>
            <CommentForm id={id} />
          </Card.Content>
        )}
      </Card>
    );
  }
}

const styles = {
  card: {
    maxWidth: 400,
    margin: 10
  },
  media: {
    height: 230
  }
};

export default CatCard;
