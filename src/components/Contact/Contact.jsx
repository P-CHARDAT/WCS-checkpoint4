import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && email && message !== null) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
      axios({
        method: "POST",
        url: "http://localhost:8000/api/admin/contact",
        data: { firstname, lastname, email, message },
      })
        .then((response) => {
          return alert(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="container-page-contact">
      <section className="box">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="contact-container">
          <div className="form-contact-wrapper">
            <h2>Contactez moi !</h2>
            <form className="form-contact" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Nom"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  placeholder="Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input type="submit" value="Envoyer" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
