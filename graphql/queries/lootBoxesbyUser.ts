import gql from "graphql-tag";

export default gql`
  query lootBoxes($userId: String) {
    user(id: $userId) {
      inventory {
        id
        status
        open_time
        server_time
        selected_item
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
