// import { useState } from 'react'
import './App.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import jsLogo from '../assets/jsLogo.svg'
import githubLogo from '../assets/githubLogo.svg'
import nodeLogo from '../assets/nodeLogo.svg'
import firebaseLogo from '../assets/firebaseLogo.svg'
import linkedinLogo from '../assets/linkedinLogo.svg'
import deskrScreenshot from '../assets/DeskrScreenshot.png'
import blackJackScreenshot from '../assets/BlackJackScreenshot.png'

function App() {

  return (
    <article>
      <h1>Hello world, <br></br>my name is<br></br> Luis Gomez</h1>
      {/* <img className='luisPhoto' src='../assets/agentCopy.png'></img> */}
      <h2>full-stack developer</h2>
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={viteLogo} className="logo" alt="React logo" />
        <img src={jsLogo} className="logo" alt="React logo" />
        <img src={nodeLogo} className="logo" alt="React logo" />
        <img src={firebaseLogo} className="logo" alt="React logo" />
        <img src={githubLogo} className="logo" alt="React logo" />
      </div>
      <a href='https://www.linkedin.com/in/luisfgomezz/'>
      <img src={linkedinLogo} className='linkedinLogo' alt="Linkedin logo" />
      </a>
      <div>
        <h1 className='workTitle'>work.</h1>
        <img src={deskrScreenshot} className='exampleScreenshot' />
        <a href='https://github.com/LuisGomez-238/Deskr'>
        <img src={githubLogo} className='gitLink' />
        <label className='clickHere'>click here</label>
        </a>
        <p>Deskr. is a tool for car dealerships that helps sales managers 
          work multiple deals with multiple salesman without skipping a beat. 
          Work as many deals as you want all in one place and communicate with 
          your team with its built in chat option.
        </p>
        <img src={blackJackScreenshot} className='exampleScreenshot' />
        <a href='https://github.com/LuisGomez-238/blackJackTrainerApp'>
        <img src={githubLogo} className='gitLink' />
        <label className='clickHere'>click here</label>
        </a>
        <p>Here is a simulation of a Black Jack game that I built using JavaScript to teach 
          beginners a basic Black Jack strategy.</p>
      </div>
    </article>
  )
}

export default App
