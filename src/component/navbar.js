import React from "react";
import { Link} from "react-router-dom";
import LogoT from "../img/ChefDev.jpg"
import "./style/navbar.css"

export const Navbar = () => {
  
  return (
    <>
  
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid coco">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <div><p class="navbar-brand pop" href="#3" >Chef-Dev</p></div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contactame</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="proyect">Proyectos</a>
        </li>       
        <li class="nav-item">
          <a class="nav-link" href="about">Conoceme</a>
        </li>       
        
        
      </ul>
    </div>
  </div>
</nav>
</>
  );
};