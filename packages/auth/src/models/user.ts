import mongoose from "mongoose";
import { Password } from "../services/password";

export enum UserRoles {
  SUPER_ADMIN = "super-admin",
  ADMIN = "admin",
  USER = "user",
}

// Interface describing properties of a new user

export interface UserAttrs {
  phone: string;
  organization: string;
  role: UserRoles;
  password: string;
  thumbnail?: string;
  email: string;
  superKey?: string;
}

// Interface describing properties user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// properties user document has
interface UserDoc extends mongoose.Document {
  phone: string;
  password: string;
  role: UserRoles;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      // required: true,
      type: String,
      default: UserRoles.ADMIN,
    },
    organization: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "https://via.placeholder.com/250x100.png",
    },
    // superKey: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("user", userSchema);

export { User };
