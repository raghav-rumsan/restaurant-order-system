import request from "supertest";
import { app } from "../../app";
import { AUTH_ROUTES } from "../../config/routes";
import { adminUserToBeCreated, createdAdminUser } from "../../test/helpers";

it("clears the cookie after signing out", async () => {
  await createdAdminUser(adminUserToBeCreated, 201);

  const response = await request(app)
    .post(AUTH_ROUTES.SIGN_OUT)
    .send({})
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
