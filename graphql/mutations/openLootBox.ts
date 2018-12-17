import gql from "graphql-tag";

export default gql`
  mutation openLootbox($idUserLootBox: String!) {
    openLootbox(id: $idUserLootBox) {
      id
      status
      selected_item
    }
  }
`;
