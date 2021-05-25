import { gql } from "apollo-server";

const MainTypeDefs = gql`
  scalar Date

  enum ImageQuality {
    High
    Medium
    Low
  }

  interface Pagination {
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
    totalDocs: Int
  }

  type Wallpaper {
    id: ID
    url: String
    height: Int
    width: Int
    blurHash: String
    tag: [String]
  }

  type Wallpapers implements Pagination {
    docs: [Wallpaper]
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
    totalDocs: Int
  }

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

  type Artists implements Pagination {
    docs: [Artist]
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
    totalDocs: Int
  }

  type Cover {
    url: String
    format: String
  }

  type SoundTrack {
    id: ID
    url: String
    title: String
    cover: Cover
    format: String
    source: String
    artist: Artist
    createTime: Date
  }

  type SoundTracks implements Pagination {
    docs: [SoundTrack]
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
    totalDocs: Int
  }

  type Posts {
    id: String!
    image: Wallpaper
    sound: SoundTrack
  }

  type Query {
    getWallpapers(
      page: Int = 1
      limit: Int = 10
      quality: ImageQuality = High
    ): Wallpapers
    getSoundTracks(page: Int = 1, limit: Int = 10): SoundTracks
    generatePosts(page: Int = 1, limit: Int = 10): Posts
    getArtists(page: Int = 1, limit: Int = 10): Artists
    getArtistInfo(id: String!): Artist
    getArtistPopularSong(id: String!): [SoundTrack]
    getArtistSoundTrack(
      id: String!
      limit: Int = 10
      page: Int = 1
    ): SoundTracks
  }
`;
export default MainTypeDefs;
