import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export default function Login({ setRole }) {
  const history = useHistory();
  const [mail, setmail] = useState("");
  const [clearPassword, setClearPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail && clearPassword) {
      setmail("");
      setClearPassword("");

      return axios({
        method: "POST",
        url: "http://localhost:8000/api/admin/login",
        data: { mail, clearPassword },
        withCredentials: true,
      })
        .then((response) => {
          setRole(response.data.admin.role);
          return history.push("/admin");
        })
        .catch((err) => {
          return alert(err);
        });
    }
    return alert("Veuillez préciser vos identifiants");
  };

  return (
    <>
      <section className="box">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="contact-container">
          <div className="form-contact-wrapper">
            <h2>Bienvenue Pierre</h2>
            <form className="form-submit" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  placeholder="Adresse mail"
                  className="log-mail"
                  type="mail"
                  value={mail}
                  onChange={(e) => setmail(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  placeholder="Mot de passe"
                  className="log-mdp"
                  type="password"
                  value={clearPassword}
                  onChange={(e) => setClearPassword(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input className="submit-login" type="submit" value="Valider" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
