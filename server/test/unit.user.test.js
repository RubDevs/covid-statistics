const expect = require("chai").expect;
const userApi = require("../components/user/network");
const testServer = require("../utils/testServer");
const assert = require("assert");
const userMock = require("../mocks/userMock");

describe("POST /user/register", () => {
  const request = testServer(userApi);

  it("Should respond with status 201 if correct info", (done) => {
    request
      .post("/user/register")
      .send({
        email: "test@test.com",
        password: "123456",
      })
      .expect(201, done);
  });

  it("Should respond with error if incorrect email", (done) => {
    request
      .post("/user/register")
      .send({
        email: "test@test",
        password: "123456",
      })
      .set("Accept", "application/json")
      .expect(500, done);
  });

  it("Should respond with error if incorrect password length", (done) => {
    request
      .post("/user/register")
      .send({
        email: "test@test.com",
        password: "12345",
      })
      .set("Accept", "application/json")
      .expect(500, done);
  });

  it("Should return a token if Ok", (done) => {
    request
      .post("/user/register")
      .send({
        email: "test@test.com",
        password: "123456",
      })
      .set("Accept", "application/json")
      .expect(201)
      .end((error, response) => {
        assert.strictEqual(response.body.hasOwnProperty("token"), true);
        done();
      });
  });
});

describe("POST /user/login", () => {
  const request = testServer(userApi);

  it("Should respond with status 200 if correct info", (done) => {
    request
      .post("/user/login")
      .send({
        email: "test@test.com",
        password: "123456",
      })
      .expect(200, done);
  });

  it("Should respond with error if incorrect email", (done) => {
    request
      .post("/user/login")
      .send({
        email: "test@test",
        password: "123456",
      })
      .set("Accept", "application/json")
      .expect(500, done);
  });

  it("Should respond with error if incorrect password length", (done) => {
    request
      .post("/user/login")
      .send({
        email: "test@test.com",
        password: "12345",
      })
      .set("Accept", "application/json")
      .expect(500, done);
  });

  it("Should return a token if Ok", (done) => {
    request
      .post("/user/login")
      .send({
        email: "test@test.com",
        password: "123456",
      })
      .set("Accept", "application/json")
      .expect(201)
      .end((error, response) => {
        assert.strictEqual(response.body.hasOwnProperty("token"), true);
        done();
      });
  });
});
