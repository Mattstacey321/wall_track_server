import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoosePaginate from "mongoose-paginate-v2";
import { encrypt } from "../utils/id_util.js";

const opts = { toJSON: { virtuals: true } };

const WallpaperSchema = new mongoose.Schema(
  {
    uploadId: {
      type: String,
      require: true,
    },
    url: {
      type: [
        {
          quality: {
            type: String,
            default: "high",
          },
          url: String,
        },
      ],
      require: true,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
    blurHash: String,
    tag: [String],
    createdTime: {
      default: Date.now,
      type: Date,
    },
  },
  opts
);

WallpaperSchema.pre("insertMany", function (next, docs) {
  for (var item of docs) {
    let id = encrypt(item.uploadId);
    item.uploadId = id;
  }
  next();
});


WallpaperSchema.plugin(mongoosePaginate);
WallpaperSchema.plugin(aggregatePaginate);

const Wallpaper = mongoose.model("wallpapers", WallpaperSchema);

export { Wallpaper };

