import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoosePaginate from "mongoose-paginate-v2";
import { encrypt } from "../utils/id_util.js";
const opts = { toJSON: { virtuals: true } };

const SoundTrackSchema = new mongoose.Schema(
  {
    uploadId: {
      type: String,
      require: true,
    },
    title: String,
    cover: {
      type: {
        uploadId: String,
        url: String,
        format: String,
      },
      require: true,
    },
    url: {
      require: true,
      type: String,
    },
    format: String,
    tag: [String],
    source: String,
    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artists",
    },
    createdTime: {
      default: Date.now,
      type: Date,
    },
  },
  opts
);

SoundTrackSchema.pre("save", async function (next) {
  var soundtrack = this;
  if (!soundtrack.isModified("id")) return next();

  soundtrack.id = encrypt(soundtrack.uploadId);
  soundtrack.cover["id"] = encrypt(soundtrack.cover["uploadId"]);
  next();

  /*await Promise.all([
    encrypt(soundtrack.uploadId),
    encrypt(soundtrack.cover["id"]),
  ])
    .then((v) => {
      console.log(v[0]);
      console.log(soundtrack.cover["id"]);
      soundtrack.id = v[0];
      soundtrack.cover["id"] = v[1];
      next();
    })
    .catch((err) => next(err));*/
});
SoundTrackSchema.plugin(mongoosePaginate);
SoundTrackSchema.plugin(aggregatePaginate);

const SoundTrack = mongoose.model("soundtracks", SoundTrackSchema);
export { SoundTrack };
