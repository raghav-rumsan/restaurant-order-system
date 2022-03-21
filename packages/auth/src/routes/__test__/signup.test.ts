import request from "supertest";
import { app } from "../../app";
import { UserAttrs, UserRoles } from "../../models/user";

export const superAdminUserToBeCreated: UserAttrs = {
  email: "test@test.com",
  password: "password",
  organization: "argahv",
  phone: "9866666666",
  role: UserRoles.SUPER_ADMIN,
};

export const adminUserToBeCreated: UserAttrs = {
  email: "test@test.com",
  password: "password",
  organization: "argahv",
  phone: "9866666666",
  role: UserRoles.ADMIN,
};

it("returns a 201 on successful signup", async () => {
  const res = await request(app)
    .post("/api/v1/users/signup")
    .send(superAdminUserToBeCreated)
    .expect(201);

  console.log("res", res);
});
