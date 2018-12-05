import gql from "graphql-tag";

export default gql`
  query lootBoxes($userId: String) {
    user(id: $userId) {
      lootboxes {
        id
        name
        icons {
          url
        }
        items {
          id
          name
          icons {
            url
          }
        }
      }
    }
  }
`;
