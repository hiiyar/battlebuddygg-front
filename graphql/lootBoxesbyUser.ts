import gql from "graphql-tag";

export default gql`
  query lootBoxes($userId: String) {
    user(id: $userId) {
      inventory {
        id
        open_time
        server_time
        lootbox {
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
  }
`;
