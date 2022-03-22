import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";

import { AUTH_ROUTES } from "../config/routes";
import { app } from "../app";
import { adminUserToBeCreated } from "./helpers";

declare global {
  function signin(): Promise<string[]>;
  let phone: string;
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "sda2";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close(true);
});

global.signin = async () => {
  const phone = adminUserToBeCreated.phone;
  const password = adminUserToBeCreated.password;

  const response = await request(app)
    .post(AUTH_ROUTES.SIGN_IN)
    .send({
      phone,
      password,
    })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
};
