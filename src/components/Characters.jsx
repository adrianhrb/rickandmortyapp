import React from "react";

// Nos llega como variable characters que es el estado de la aplicación
// respecto a los personajes de esta página
const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map(
        (
          char // Recorremos todos los personajes para mostrarlos
        ) => (
          <div key={char.id} className="col-md-6 col-lg-3 mb-5 p">
            <div className="card" style={{ minWidth: "200px" }}>
              <img src={char.image} alt={char.name} />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <hr />
                <p>
                  <b>Location:</b> {char.location.name}
                </p>
                <p>
                  <b>Species:</b> {char.species}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Characters;
