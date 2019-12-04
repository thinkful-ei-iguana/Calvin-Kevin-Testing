const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../frequency");

describe("GET frequency of string characters occurence", () => {
  it("should return repeated character count totals", () => {
    return supertest(app)
      .get("/frequency")
      .query("aaBBAAbbaa")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.include.all.keys("count", "average", "highest");
        // expect(res.body).to
        // expect(res.body).to
      });
  });
});
