import React from "react";
import hater from "../assets/hater.png";
import postgres from "../assets/postgres.svg";
import react from "../assets/react.svg";
import django from "../assets/django.svg";
import css from "../assets/css.svg";
import heroku from "../assets/heroku.svg";
import mongo from "../assets/mongo.svg";
import express from "../assets/express.svg";
import node from "../assets/node.svg";
import python from "../assets/python.svg";
import cosmos from "../assets/cosmos.png";
import html from "../assets/html.svg";
import javascriptsvg from "../assets/javascriptsvg.svg";
import nined from "../assets/nined.png";
import jwt from "../assets/jwt.svg";
const Project = () => {
  return (
    <>
      <div id="hater" className="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={hater} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="hater-title">Hater</h1>
            <div className="github-links">
              <a href="https://github.com/mustafabin/hater">Github</a>
            </div>
            <p>
              a Twitter clone in a group of 9 where we created a relational
              database using PostgreSQL with Session-based login to authenticate
              comments and posts 👺 🐥
            </p>
            <div className="project-tools">
              <img src={postgres} alt="postgres" />
              <img src={react} alt="react" />
              <img src={django} alt="django" />
              <img src={python} alt="python" />
              <img src={css} alt="css" />
              <img src={heroku} alt="heroku" />
            </div>
          </div>
        </div>
      </div>

      <div id="cosmos" className="project-container cosmos">
        <div className="project-card">
          <div className="project-image-container">
            <img src={cosmos} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="cosmos-title">Cosmos</h1>
            <div className="github-links">
              <a href="https://cosmos-shop.netlify.app/">Deployed</a>
              <a href="https://github.com/mustafabin/Cosmos">Github</a>
            </div>
            <p>
              One Stop For All Your Intergalactic Needs! A ecommerce site
              utilizing the MERN and Json Web Tokens ✨
            </p>
            <div className="project-tools">
              <img src={mongo} alt="mongo" />
              <img src={express} alt="express" />
              <img src={react} alt="react" />
              <img src={node} alt="node" />
              <img src={css} alt="css" />
              <img src={jwt} alt="jwt" />
              <img src={heroku} alt="heroku" />
            </div>
          </div>
        </div>
      </div>
      <div id="nined" className="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={nined} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="nined-title">9D Tic Tac Toe</h1>
            <div className="github-links">
              <a href="https://mustafabin.github.io/9D-tic-tac-toe/">
                Deployed
              </a>
              <a href="https://github.com/mustafabin/9D-tic-tac-toe">Github</a>
            </div>
            <p>
              Win three games of regular Tic Tac Toe in a row. Built in vanilla
              js 🍦
              <br></br>
              Full rule set {" : "}
              <a href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/">
                Here
              </a>
            </p>
            <div className="project-tools">
              <img src={html} alt="html" />
              <img src={javascriptsvg} alt="javascriptsvg" />
              <img src={css} alt="css" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
