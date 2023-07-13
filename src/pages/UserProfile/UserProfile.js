import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "./UserProfile.css";

const UserProfile = (props) => {
  const perfilUsuario = localStorage.getItem("code_user");
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://healthypocket.live/api/users/${perfilUsuario}`;

      try {
        const response = await axios.get(apiUrl);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container-main-card">
        <br></br>
        <h1>Resumen de datos de {user.username}</h1>
        <div className="container-card-user-p">
          <div className="cards-user-c">
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>NOMBRE DE USUARIO</h3>
              <p>{user.username}</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>NOMBRE</h3>
              <p>{user.nombre}</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>APELLIDOS</h3>
              <p>{user.apellido}</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>CORREO ELECTRONICO</h3>
              <p>{user.correo}</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>HOSPITAL O CLINICA</h3>
              <p>Hospital nombre</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>DOCTOR</h3>
              <p> Doctor nombre</p>
            </div>
            <br></br>

            <br></br>
            <div className="card-user-p">
              <h3>TOTAL GASTOS</h3>
              <p>$Dineros</p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
