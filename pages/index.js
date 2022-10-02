import Head from 'next/head'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import styles from '../styles/Home.module.css'
import { Html } from 'next/document';
import Script from 'next/script';

export default function Home() {

  

  return (
  <>
  <Head>
  <title>Codiyapa</title>
  <link rel="icon" href="/fav.png" type="image/x-icon"/>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="/style.css"/>
  </Head>
  <body>
  <div class="container">
    <h1 class="brand"><span>CoDiYaPa</span> Community</h1>
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3><i class="fa fa-handshake-o"></i> Services</h3>
        <ul>
          <li><i class="fa fa-code"></i> Coding Solution</li>
          <li><i class="fa fa-file-code-o"></i> College Project</li>
          <li><i class="fa fa-pencil-square-o"></i> Assignment</li>
          <li><i class="fa fa-lightbulb-o"> Reasoning & Aptitude</i></li>
        </ul>
      </div>
      <div class="contact">

      
        <h3>Contact Information</h3>
        <form method="POST" action="send">
          <p>
            <label>Name</label>
            <input required type="text" name="name" placeholder="Enter your name"/>
          </p>
          <p>
            <label>Whatsapp Number</label>
            <input required type="text" name="phone" placeholder="No advertisment will flash on your phone."/>
          </p>
          <p>
            <label>Email Address</label>
            <input required type="email" name="email" placeholder="abc@xyz.com"/>
          </p>
          <p>
            <label>Service</label>
            <select name="service" id="service" required>
              <option value="">Select what you need</option>
              <option value="Coding Solution">Coding Solution</option>
              <option value="College Project">College Project</option>
              <option value="College Assignment">College Assignment</option>
              <option value="Reasoning & Aptitude">Reasoning & Aptitude</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p id="date-para">
            <label id="date-label">Date</label>
            <input type="date" name="date" placeholder="Exam Date"/>
          </p>
          <p id="company-para">
            <label>Company</label>
            <input type="text" name="company" placeholder="Exam Company name"/>
          </p>
          <p id="project-type-para">
            <label>Project Type</label>
            <select name="ProjectType" id="projectType">
              <option value="">Select your Project Type</option>
              <option value="minor">Minor Project</option>
              <option value="major">Major Project</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p id="semester-para">
            <label>Semeseter</label>
            <select name="semeseter" id="semeseter">
              <option value="">Select your Semester</option>
              <option value="1">1st Sem</option>
              <option value="2">2nd Sem</option>
              <option value="3">3rd Sem</option>
              <option value="4">4th Sem</option>
              <option value="5">5th Sem</option>
              <option value="6">6th Sem</option>
              <option value="7">7th Sem</option>
              <option value="8">8th Sem</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p id="time-para">
            <label id="time-label">Exam Time / Slot</label>
            <input type="time" name="time" placeholder="Exam Date"/>
          </p>
          <p class="full">
            <label>Description</label>
            <textarea required name="message" rows="5" placeholder="Please select a service" id="placeholder"></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div> 
    </div>
  </div>
  <Script src='/script.js'/>
  </body>
  </>
)}
