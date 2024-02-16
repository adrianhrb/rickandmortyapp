import React from "react";

// El navegador es un componente independiente que no recibe nada
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt="Rick and Morty"
          style={{ width: "100%" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
