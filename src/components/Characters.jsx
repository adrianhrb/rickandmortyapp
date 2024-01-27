import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((char, index) => (
        <div key={index} className="col-md-6 col-lg-3 mb-5 p">
            <div className="card" style={{minWidth: "200px"}}>
                <img src={char.image} alt={char.name} />
                <div className="card-body">
                  <h5 className="card-title">{char.name}</h5>
                  <hr />
                  <p><b>Location:</b> {char.location.name}</p>
                  <p><b>Species:</b> {char.species}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters
