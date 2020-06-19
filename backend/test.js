const server = require("./server");
const chai = require("chai");
const chaiHttp = require("chai-http")
const should = chai.should();

chai.use(chaiHttp);

describe("/GET Hello World", () => {
    it("should return Hello World", (done)=>{
        chai.request(server)
            .get('/')
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
    })
})