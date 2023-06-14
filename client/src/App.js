import './App.css';
import { Component, useEffect, useState } from 'react';
import { React } from 'react';
import { providers } from 'ethers';
import { ethers } from 'ethers';
import { parseEther, formatEther } from '@ethersproject/units';
import FRC from './contracts/FRC.json';
import Web3 from 'web3';
import './RobotForm.js';
import './ScoutForm.js';

const ContractAddress = "0xEEf4F2AaCa997a48862A97742a737E30Cc922d54";
const emptyAddress = '0x0000000000000000000000000000000000000000';


  
function App() {


  
    // // Set variables for the scout
    // const [Name, setName] = useState("");
    // const [teamNum, setTeamNum] = useState(0);
    // const [matchNum, setMatchNum] = useState(0);

    // // Set variables for the robot
    // const [robotNum, setRobotNum] = useState(0);
    // const [points, setPoints] = useState(0);
    // const [report, setReport] = useState("");
    // const [win, setWin] = useState(false);
  
    // async loadWeb3() 22{
    //   // Metamask
    //   if (window.ethereum) {
    //     window.web3 = new Web3(window.ethereum);
    //     await window.ethereum.enable();
    //   }
    // }

    return (
      <body>
        <nav>
          <ul>
            <li><a href="https://metamask.io/">Connect to Metamask</a></li>
            <li><a href="ScoutForm.js">Scout Form</a></li>
            <li><a href="RobotForm.js">Robot Report Form</a></li>
            <li className='right-align text-nowrap d-none nav-item d-sm-none d-sm-block'><small style={{color:'red'}}>ACCOUNT NUMBER:</small></li>
          </ul>
        </nav>
        <h1>Welcome to FRC Scouting</h1>
      </body>

        



    )

  
    }

export default App;
