import { AUTH_ROUTES } from "../../config/routes";
import request from "supertest";
import { app } from "../../app";
import { adminUserToBeCreated } from "../../test/helpers";

const createHelper = async (expectation: number) => {
  const cookie = await global.signin();

  const response = await await request(app)
    .get(AUTH_ROUTES.SIGN_UP)
    .set("Cookie", cookie)
    .send()
    .expect(expectation);

  return { cookie, response };
};

it("responsd with details of current user", async () => {
  const { response } = await createHelper(200);

  expect(response.body.currentUser.phone).toEqual(adminUserToBeCreated.phone);
});

it("returns null if not authenticated", async () => {
  const { response } = await createHelper(200);

  expect(response.body.currentUser).toEqual(null);
});
