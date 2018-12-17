import gql from "graphql-tag";

export default gql`
  query lootBoxes($idUserLootBox: String!) {
    roulette(idUserLootbox: $idUserLootBox) {
      items {
        id
        name
        icons {
          url
        }
      }
    }
  }
`;
