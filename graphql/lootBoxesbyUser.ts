import gql from "graphql-tag";

export default gql`
  query lootBoxes($id: String) {
    user(id: $id) {
      lootboxes {
        lootbox {
          id
          name
          items {
            item {
              id
              name
            }
          }
        }
      }
    }
  }
`;
