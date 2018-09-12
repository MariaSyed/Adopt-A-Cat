import { gql } from "apollo-boost";

export const GET_CATS = gql`
  query {
    allCats {
      id
      photoUrl
      name
      breed
      age
      owner
      comments {
        author
        content
      }
    }
  }
`;

export const ADD_CAT = gql`
  mutation createCat($photoUrl: String!, $name: String!, $breed: String!, $age: Int!) {
    createCat(photoUrl: $photoUrl, name: $name, breed: $breed, age: $age, owner: null) {
      id
      photoUrl
      name
      breed
      age
      owner
      comments {
        author
        content
      }
    }
  }
`;

export const ADOPT_CAT = gql`
  mutation updateCat($id: ID!, $owner: String!) {
    updateCat(id: $id, owner: $owner) {
      id
      photoUrl
      name
      breed
      age
      owner
      comments {
        author
        content
      }
    }
  }
`;

// Nested create connection mutation
export const ADD_COMMENT_FOR_CAT = gql`
  mutation createComment($catId: ID!, $author: String!, $content: String!) {
    createComment (
      catId: $catId
      content: $content
      author: $author
    ) {
      id
      content
      author
    	cat {
        id
        photoUrl
        name
        breed
        age
        owner
        comments {
          author
          content
        }
      }
    }
  }
`;
