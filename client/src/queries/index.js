import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
  mutation createEvent(
    $title: String!
    $desc: String
    $date: String
    $location_id: ID!
    $user_id: ID!
  ) {
    createEvent(data: {
      title: $title
      desc: $desc
      date: $date
      location_id: $location_id
      user_id: $user_id
    }) {
      id
    }
  }
`

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      title
      desc
      date
      location {
        name
      }
      user {
        username
        email
      }
      participants {
        user {
          username
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query getEvents {
    events {
      id
      title
      desc
      date
    }
  }
`
