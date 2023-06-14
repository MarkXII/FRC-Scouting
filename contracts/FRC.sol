// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract FRC {
    address owner;

    struct Scouter {
        string name;
        uint teamNum;
        uint matchNum;
        uint[] listIds;

    }
    
    struct ScoutData {
        uint robotNum;
        uint points;
        string report;
        bool win;
    }

    constructor() payable public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    ScoutData public scoutData;

    function addScouting(uint _robotNum, uint _points, string memory _report, bool _win) public {
        scoutData.robotNum = _robotNum;
        scoutData.points = _points;
        scoutData.report = _report;
        scoutData.win = _win;

    }
    
    function getScouting() public view returns (uint, uint, string memory, bool) {
        return (scoutData.robotNum, scoutData.points, scoutData.report, scoutData.win);
    }
    
}