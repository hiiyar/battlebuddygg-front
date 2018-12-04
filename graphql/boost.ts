import gql from "graphql-tag";

export default gql`
  query allBoosts {
    boosts {
      id
      name
      value
      matches
      index
      icons {
        url
      }
    }
  }
`;
