import './App.css';
import { useEffect, useState } from 'react';
import { React } from 'react';
import { providers } from 'ethers';
import { ethers } from 'ethers';
import { parseEther, formatEther } from '@ethersproject/units';
import FRC from './contracts/FRC.json';



        <form>
        <div>
        <h1 className="header">Scout Identifier</h1>
        <h2 className="subheader">Fill Out Form</h2>
        <label for="Name">Name<br />
        <input type="text" id="Name" name="Name" size="30"></input>
        </label>
        <label for="teamNum">Team Number<br />
        <input type="number" id="teamNum" name="teamNum"></input>
        </label>
        <br />
        <label for="matchNum">Match Number<br />
        <input type="number" id="matchNum" name="matchNum"></input>
        </label>
        <br />

        <br />
        </div>
        <div>
        <button>Submit Form</button>
        </div>
        </form>