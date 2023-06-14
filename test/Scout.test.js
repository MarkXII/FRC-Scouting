const FRC = artifacts.require("FRC");

contract("FRC", (accounts) => {
    let FRCInstance;
  
    before(async () => {
      FRCInstance = await FRC.deployed();
    });
    
    it("This should enter the Scout report", async () => {
        const robotNum = 2604;
        const points = 16;
        const report = "Robot Did Defense";
        const win = true;

        await FRCInstance.addScouting(robotNum, points, report, win);

        const result = await FRCInstance.getScouting();
        assert.equal(result[0].toNumber(), robotNum, "Wrong Team Number");
        assert.equal(result[1].toNumber(), points, "Incorrect Score Count");
        assert.equal(result[2], report, "The Report Does not Match");
        assert.equal(result[3], win, "Incorrect value");
    });

    it("This should retrieve the Scout report", async () => {
        const robotNum = 2604;
        const points = 16;
        const report = "Robot Did Defense";
        const win = true;

        const result = await FRCInstance.getScouting();
        assert.equal(result[0].toNumber(), robotNum, "Wrong Team Number");
        assert.equal(result[1].toNumber(), points, "Incorrect Score Count");
        assert.equal(result[2], report, "The Report Does not Match");
        assert.equal(result[3], win, "Incorrect value");
    });

  });