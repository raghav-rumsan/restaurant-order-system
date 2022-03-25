import request from "supertest";

import { UserRoles } from "@romass/backend-common";
import { UserAttrs } from "../models/user";
import { app } from "../app";
import { AUTH_ROUTES } from "../config/routes";

export const superAdminUserToBeCreated: UserAttrs = {
  email: "test@test.com",
  password: "password",
  organization: "argahv",
  phone: "9866666666",
  role: UserRoles.SUPER_ADMIN,
};

export const adminUserToBeCreated: UserAttrs = {
  email: "test357@test.com",
  password: "passwor2d",
  organization: "argahv55",
  phone: "9866662222",
  role: UserRoles.ADMIN,
};

export const createdSuperAdminUser = async (expectation: number) => {
  const res = await request(app)
    .post(AUTH_ROUTES.SIGN_UP)
    .send(superAdminUserToBeCreated)
    .expect(expectation);

  return res;
};
export const createdAdminUser = async (expectation: number) => {
  const res = await request(app)
    .post(AUTH_ROUTES.SIGN_UP)
    .send(adminUserToBeCreated)
    .expect(expectation);

  return res;
};
