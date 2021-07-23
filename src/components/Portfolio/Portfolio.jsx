import React, { useEffect, useState } from "react";
import AdminProjetsInfo from "../Admin/AdminProjetsInfo";
import axios from "axios";
import "./Portfolio.css";

export default function Portfolio({ role }) {
  console.log(role);
  const [projets, setProjets] = useState([]);

  // pour récupérer mes projets
  const getProjets = () => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/projets",
      withCredentials: true,
    })
      .then((data) => {
        console.log(data.data, "data res de création projet");
        setProjets(data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    getProjets();
  }, []);

  return (
    <div className="container-portfolio">
      <section className="box">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <section className="Pres-container">
          <ul>
            <li>
              <h1>Portfolio web développeur</h1>
              <div>Vous trouverez ici l'ensemble de mes projets.</div>
              <div>
                J'utilise principalement React, JS, CSS, Node, Express, Mysql,
                Git et GitHub
              </div>
            </li>
          </ul>
        </section>
      </section>

      <div className="container-projets">
        {projets.map((projet, index) => (
          <li className="projet-uni" key={[index]}>
            <AdminProjetsInfo
              key={projet.id}
              {...projet}
              getProjets={getProjets}
              role={role}
            />
          </li>
        ))}
      </div>
    </div>
  );
}
