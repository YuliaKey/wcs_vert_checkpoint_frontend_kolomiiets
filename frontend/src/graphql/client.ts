import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query countries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;

export const COUNTRY = gql`
  query country($code: String!) {
    country(code: $code) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
    }
  }
`;
