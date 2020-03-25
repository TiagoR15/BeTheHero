import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Registration</h1>
          <p>
            Do your registration, get into the platform and help people to find
            your ONG incidents.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />I have an account.
          </Link>
        </section>

        <form>
          <input placeholder="Name of the ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
