import request from "supertest";
import { app } from "../../app";
import {
  adminUserToBeCreated,
  createdAdminUser,
  createdSuperAdminUser,
} from "../../test/helpers";
import { AUTH_ROUTES } from "../../config/routes";

it("returns a 201 on successful signup of admin", async () => {
  await createdAdminUser(201);
});

it("return a 201 on a successful signup of super-admin", async () => {
  await createdSuperAdminUser(201);
});

it("sets a cookie after successful signup by admin", async () => {
  const response = await createdAdminUser(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("sets a cookie after successful signup by superadmin", async () => {
  const response = await createdSuperAdminUser(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("return a  400 with invalid email", async () => {
  return request(app)
    .post(AUTH_ROUTES.SIGN_UP)
    .send({
      ...adminUserToBeCreated,
      email: "tes232",
    })
    .expect(400);
});

it("return a 400 with invalid phone", async () => {
  return request(app)
    .post(AUTH_ROUTES.SIGN_UP)
    .send({
      ...adminUserToBeCreated,
      phone: "23213",
    })
    .expect(400);
});

it("disallow duplicate phones", async () => {
  await createdAdminUser(201);
  await createdAdminUser(400);
});
