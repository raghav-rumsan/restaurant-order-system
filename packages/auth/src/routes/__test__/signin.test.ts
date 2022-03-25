import request from "supertest";
import { app } from "../../app";
import { AUTH_ROUTES } from "../../config/routes";
import {
  adminUserToBeCreated,
  createdAdminUser,
  siginInAdminUser,
} from "../../test/helpers";

it("fails when a phone that doesnt exist is supplied", async () => {
  await siginInAdminUser(
    {
      phone: "9864624554",
      password: "sdad",
    },
    400
  );
});

it("fails when incorrect password in supplied", async () => {
  await createdAdminUser(adminUserToBeCreated, 201);

  await siginInAdminUser(
    { phone: adminUserToBeCreated.phone, password: "65665823d" },
    400
  );
});

it("responds with a cookie when valid credentials are given", async () => {
  await createdAdminUser(adminUserToBeCreated, 201);
  const response = await request(app)
    .post(AUTH_ROUTES.SIGN_IN)
    .send({
      phone: adminUserToBeCreated.phone,
      password: adminUserToBeCreated.password,
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("fails if invalid data is sent(validation)", async () => {});
