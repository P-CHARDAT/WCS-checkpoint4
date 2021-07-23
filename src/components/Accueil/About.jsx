import React, { useState } from "react";
import { useHistory } from "react-router";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./About.css";
import "../Contact/Contact.css";

export default function About() {
  const history = useHistory();
  const [easterEgg0, setEasterEgg0] = useState(false);
  const [easterEgg1, setEasterEgg1] = useState(false);
  function secretClick() {
    if (easterEgg0 && easterEgg1 === true) {
      setEasterEgg0(false);
      setEasterEgg1(false);
      return history.push("/login");
    }
    setEasterEgg0(false);
    return setEasterEgg1(false);
  }
  return (
    <div className="container-accueil">
      <section className="box">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube" onClick={() => setEasterEgg0(true)}></div>
        <div className="cube" onClick={() => setEasterEgg1(true)}></div>
        <div className="cube">
          <a href="https://www.facebook.com/pierre.chdt/" className="svg-icons">
            <FacebookIcon
              className="svg-hover"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <div className="cube">
          <a
            href="https://www.linkedin.com/in/pierre-chardat-1abb42212/"
            className="svg-icons"
          >
            <LinkedInIcon
              className="svg-hover"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <div className="cube">
          <a href="https://github.com/P-CHARDAT" className="svg-icons">
            <GitHubIcon
              className="svg-hover"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <section className="About-container">
          <ul>
            <li>
              <h1>
                Bonjour,
                <br />
                <span onClick={secretClick}>Je m'appelle Pierre CHARDAT.</span>
              </h1>
              <div>Je suis en formation de développeur web full-stack</div>
              <div>
                Vous pouvez consulter mes projets React dans mon : <br />
                <a title="Portfolio" href="/">
                  <span>Portfolio</span>
                </a>
              </div>
              <div>
                N'hésitez pas à prendre contact pour plus de détails :<br />
                <a href="/">
                  <span>pierre.chardat@neuf.fr</span>{" "}
                </a>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
