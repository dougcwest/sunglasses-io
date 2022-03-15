let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app/server");

chai.should();
chai.use(chaiHttp);

describe("products", () => {
  describe("/GET product", () => {
    it("it should GET all of the brands", (done) => {
      chai
        .request(server)
        .get("/api/brands")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body.length.should.be.above(0);
          done();
        });
    });
  });
});