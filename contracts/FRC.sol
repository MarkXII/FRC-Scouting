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

    Scouter[] public scouts;
    ScoutData[] public scoutDataSet;
    uint amount = 0;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    // Variables for addScouting function
    Scouter public scouter;
    ScoutData public scoutData;

    // Mapping to dataset that contains information on robot based on robot number.
    mapping (uint => ScoutData) public scoutReports;
    // Address for account for transactions
    mapping(address => uint) public balances;

    // Adds the scout info to the struct
    function addScouter(string memory _name, uint _teamNum, uint _matchNum) public {
        scouts.push(Scouter(_name, _teamNum,  _matchNum));

    }
    // Adds the Robot Report to the ScoutData struct and then maps the list based on robot number to return the entire struct
    function addScouting(uint _robotNum, uint _points, string memory _report, bool _win) public {
        scoutDataSet.push(ScoutData(_robotNum, _points, _report, _win));
        scoutReports[_robotNum] = (ScoutData(_robotNum, _points, _report, _win));
    }
    // Retrieves the scouter information
    function getScout() public view returns (string memory, uint, uint) {
        return (scouter.name, scouter.teamNum, scouter.matchNum);
    // Retrieves just the robot ID
    }
    function getScouting() public view returns (uint) {
        return (scoutData.robotNum);
    }

    // Allows purchase of Report for 2 ether
    function purchaseScouting() external payable returns(address buyer) {
        require(msg.value == 2 ether, "Payment required to retrieve data");
        amount = msg.value;
        balances[buyer] += msg.value;
    }
}