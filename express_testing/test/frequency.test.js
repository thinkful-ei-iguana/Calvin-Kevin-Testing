const { expect } = require("chai");
const supertest = require("supertest");
const apple = require("../frequency");

describe("GET frequency of string characters occurence", () => {
  it("should return repeated character count totals", () => {
    console.log(apple);
    return supertest(apple)
      .get("/frequency")
      .query("aaBBAAbbaa")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.include.all.keys("unique", "average", "highest");
        // expect(res.body).to.have
        // expect(res.body).to
      });
  });
});
