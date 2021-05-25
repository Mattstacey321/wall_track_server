import { MainService } from "../services/main_service.js";
export class MainController {
  mainService = new MainService();
  constructor() {}

  async getWallpapers(args) {
    const result = await this.mainService.getWallpapers(args);
    return result;
  }

  async getSoundTracks(args) {
    const result = await this.mainService.getSoundTracks(args);
    return result;
  }

  async getArtists(args) {
    const result = await this.mainService.getArtists(args);
    return result;
  }

  async getArtistInfo(args) {
    const result = await this.mainService.getArtistInfo(args);
    return result;
  }

  async getArtistPopularSong(args) {
    const result = await this.mainService.getArtistPopularSong(args);
    return result;
  }

  async getArtistSoundTrack(args) {
    const result = await this.mainService.getArtistSoundTrack(args);
    return result;
  }
}
