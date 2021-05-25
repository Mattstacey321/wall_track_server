import { MainController } from "../../controllers/main_controller.js";

const mainController = new MainController();

const MainResolver = {
  ImageQuality: {
    High: "high",
    Medium: "medium",
    Low: "low",
  },
  Pagination: {
    __resolveType(_, __, ___) {
      return null;
    },
  },
  Query: {
    async getWallpapers(_, args) {
      return mainController.getWallpapers(args);
    },
    async getSoundTracks(_, args) {
      return mainController.getSoundTracks(args);
    },
    async generatePosts(_, {}) {
      return [];
    },
    async getArtists(_, args) {
      return mainController.getArtists(args);
    },
    async getArtistInfo(_, args) {
      return mainController.getArtistById(args);
    },
    async getArtistPopularSong(_, args) {
      return mainController.getArtistPopularSong(args);
    },

    async getArtistSoundTrack(_, args) {
      return mainController.getArtistSoundTrack(args);
    },
  },
};
export default MainResolver;
