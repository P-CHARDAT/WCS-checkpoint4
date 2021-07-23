import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import AdminProjetsInfo from "./AdminProjetsInfo";
// import cameraPhoto from "../Image/cameraPhoto.jpg";
import "./AdminPage.css";

export default function AdminPage() {
  // state permettant le stockage et envoie dans le back de notre image
  // const [fileSelected, setFileSelected] = useState("");
  // const [file, setFile] = useState("");
  // const [name, setName] = useState("");
  // const [projets, setProjets] = useState([]);

  // Permet de stocker l'image(src) dans un state avant envoie dans le back

  // const onChangeFile = (event) => {
  //   const { type } = event.target.files[0];
  //   if (type !== "image/png" && type !== "image/jpeg") {
  //     alert("Veuillez sellectioner une image .jpeg, .jpg ou png");
  //   } else {
  //     setFileSelected(event.target.files[0]);
  //   }
  // };

  // Vérification des données avant de les envoyer
  const UserValidation = object().shape({
    title: string().required("Pense à mettre un titre Pierre !"),
    link: string().required("Il te faut un liens vers ton projet."),
    description: string(),
    type: string(),
    technos: string(),
    date: string(),
    img_src: string(),
  });

  // Fonction permettant de créer un projet
  const handleSubmit = async (values, { resetForm }) => {
    // if (fileSelected) {
    //   const data = new FormData();
    //   data.append("file", fileSelected);
    //   data.append("configuration", JSON.stringify({ alt: name }));
    //   console.log(data, "data de image here");
    //   console.log(data.file, "data.file ici !");
    const projectToCreate = { ...values };
    console.log(projectToCreate);
    await axios({
      method: "POST",
      url: "http://localhost:8000/api/projets",
      withCredentials: true,
      data: projectToCreate,
      // data: { data, projectToCreate },
      // data: projectToCreate,
    })
      .then((data) => {
        console.log(data, "data res de création projet");
        // setFile({ filename: data.data.img_src });
        resetForm({ values: "" });
        alert("Projet créé avec succès");
      })
      .catch((err) => {
        alert(err);
      });
    // }
    // return alert("il te faut une image Pierre !");
  };

  // pour récupérer mes projets
  // const getProjets = () => {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:8000/api/projets",
  //     withCredentials: true,
  //   })
  //     .then((data) => {
  //       console.log(data.data, "data res de création projet");
  //       setProjets(data.data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };
  // useEffect(() => {
  //   getProjets();
  // }, []);

  return (
    <div className="container-AdminPage">
      <section className="box">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        <div className="cube"></div>

        <div className="cube"></div>
        <div className="Admin-container-create-project">
          <div className="form-contact-wrapper">
            <h3>Quel nouveau projet vas-tu rajouter ?</h3>

            {/* Ici se trouve le formulaire de créeation d'un projet  */}
            <Formik
              initialValues={{
                title: "",
                link: "",
                description: "",
                type: "",
                technos: "",
                date: "",
                img_src: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={UserValidation}
            >
              {() => {
                return (
                  <Form>
                    {/* <div className="form-contact"> */}
                    {/* Début modif pour multer */}
                    {/* second Test */}
                    {/* <label htmlFor="Nom du pôle">
                        Nom de l'image
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </label>

                      <label htmlFor="file">
                        Sélectionne une image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={onChangeFile}
                        ></input>
                      </label> */}
                    {/* fin second test */}
                    {/* <input
                        type="file"
                        accept="image/*"
                        id="multer"
                        onChange={onChangeFile}
                      />
                      <div className="container__imgprofil">
                        {!file && (
                          <img
                            src={require("../Image/cameraPhoto.jpg")}
                            alt="test"
                            id="img__multer"
                            style={{ width: 10 + "vm" }}
                          />
                        )}
                        {file && (
                          <img
                            src={`http://localhost:8000/images/${file.filename}`}
                            alt="test"
                            id="img__multer"
                          />
                        )}
                        <label htmlFor="multer">
                          <img
                            src="../Image/cameraPhoto.jpg"
                            alt="selection_image"
                            id="imgPhoto"
                          />
                        </label>
                      </div> */}
                    {/* fin de modif pour multer  */}
                    <label htmlFor="title" className="inputBox1">
                      <div className="espace">Titre:</div>
                      <Field name="title" id="title" />
                      <ErrorMessage name="title" component="div" />
                    </label>
                    <label htmlFor="link" className="inputBox1">
                      <div className="espace">Lien:</div>
                      <Field name="link" id="link" />
                      <ErrorMessage name="link" component="div" />
                    </label>

                    <label htmlFor="description" className="inputBox1">
                      <div className="espace">Description:</div>
                      <Field name="description" id="description" />
                      <ErrorMessage name="description" component="div" />
                    </label>
                    <label htmlFor="type" className="inputBox1">
                      <div className="espace">
                        En ligne ou en développement:
                      </div>
                      <Field name="type" id="type" className="inputBox1" />
                      <ErrorMessage name="type" component="div" />
                    </label>
                    <label htmlFor="technos" className="inputBox1">
                      <div className="espace">Technos utilisées:</div>
                      <Field
                        name="technos"
                        id="technos"
                        className="inputBox1"
                      />
                      <ErrorMessage name="technos" component="div" />
                    </label>
                    <label htmlFor="date" className="inputBox1">
                      <div className="espace">date:</div>
                      <Field name="date" id="date" />
                      <ErrorMessage name="date" component="div" />
                    </label>
                    <label htmlFor="img_src" className="inputBox1">
                      <div className="espace">Image sous forme de lien:</div>
                      <Field name="img_src" id="img_src" />
                      <ErrorMessage name="img_src" component="div" />
                    </label>
                    <div className="inputBox1">
                      <input type="submit" value="Créer" />
                    </div>
                    {/* </div> */}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      {/* 
      <div>
        {projets.map((projet, index) => (
          <li key={[index]}>
            <AdminProjetsInfo
              key={projet.id}
              {...projet}
              getProjets={getProjets}
            />
          </li>
        ))}
      </div> */}
    </div>
  );
}
