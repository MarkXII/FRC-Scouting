import './App.css';
import { useEffect, useState } from 'react';
import { React } from 'react';
import { providers } from 'ethers';
import { ethers } from 'ethers';
import { parseEther, formatEther } from '@ethersproject/units';
import FRC from './contracts/FRC.json';

      <form>
        <div>
          <h1 className="header">Scouting Form</h1>
          <h2 className="subheader">Fill Out Form</h2>
          <label for="robotNum">What is the Robot Number<br />
          <input type="number" id="robotNum" name="robotNum"></input>
          </label>
          <br />
          <label for="points">How Many Points did they Score<br />
          <input type="number" id="points" name="points"></input>
          </label>
          <br />
          <label for="report">Report the Robot's performance<br />
          <input type="text" id="report" name="report" size="30"></input>
          </label>
          <br />
          <label for="report">Did the Alliance Win<br />
          <input type="checkbox" id="report" name="report" size="30"></input>
          </label>
          <br />
        </div>
        <div>
           <button>Submit Form</button>
        </div>
      </form>
