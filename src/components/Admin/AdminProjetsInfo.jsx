import React from "react";
import axios from "axios";
import "./AdminProjetsInfo.css";

export default function AdminProjetsInfo({
  id,
  title,
  link,
  description,
  type,
  technos,
  date,
  img_src,
  getProjets,
  role,
}) {
  const deleteProjet = () => {
    if (window.confirm("Are you sure you want to delete this user ?")) {
      axios({
        method: "DELETE",
        url: `http://localhost:8000/api/projets/${id}`,
      })
        .then(() => {
          alert("User deleted");
          getProjets();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="box1">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="contact-container">
        <div className="form-contact-wrapper">
          <h2>{title}</h2>
          <p>{date}</p>

          <div className="inputBox">
            <a href={link}>{type}</a>
          </div>
          <div className="inputBox">
            <p>{description}</p>
          </div>
          <div className="inputBox">
            <p>{technos}</p>
          </div>
          <div className="inputBox">
            <img src={img_src} alt={title} />
          </div>
          {role === "admin" && (
            <button type="button" onClick={deleteProjet}>
              Supprimer ce projet
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
