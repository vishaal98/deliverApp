const request = require("supertest");
const app = require("./app");
const db = require("./configs/pgConfig");

describe("Test Application", () => {
  test("Home route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await db.end();
  });
});
