import { gql } from "apollo-server";

const ArtistTypeDefs = gql`
  type Avatar {
    url: String
    thumb1: String
    thumb2: String
    blurHash: String
  }

  type SocialProfile {
    type: String
    profileId: String
  }

  type Artist {
    id: ID
    name: String
    avatar: Avatar
    socialProfile: [SocialProfile]
    totalSong: Int
  }
`;

export default ArtistTypeDefs;
