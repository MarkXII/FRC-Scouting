// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract FRC {
    address owner;

    struct Scouter {
        string name;
        uint teamNum;
        uint matchNum;

    }
    
    struct ScoutData {
        uint robotNum;
        uint points;
        string report;
        bool win;
    }
    uint amount = 0;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    Scouter public scouter;
    ScoutData public scoutData;

    mapping(address => uint) public balances;

    function addScouter(string memory _name, uint _teamNum, uint _matchNum) public {
        scouter.name = _name;
        scouter.teamNum = _teamNum;
        scouter.matchNum = _matchNum;

    }
    function addScouting(uint _robotNum, uint _points, string memory _report, bool _win) public {
        scoutData.robotNum = _robotNum;
        scoutData.points = _points;
        scoutData.report = _report;
        scoutData.win = _win;
    }
    
    function getScout() public view returns (string memory, uint, uint) {
        return (scouter.name, scouter.teamNum, scouter.matchNum);

    }
    function getScouting() public view returns (uint) {
        return (scoutData.robotNum);
    }

    
    function purchaseScouting() external payable returns(address buyer) {
        require(msg.value == 2 ether, "Payment required to retrieve data");
        amount = msg.value;
        balances[buyer] += msg.value;
    }
}