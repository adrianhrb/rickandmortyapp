import React from "react";
import { Link } from "react-router-dom";

const Characters = ({ characters, detailRequest }) => {

  const sendDetailRequest = (id) => {
    detailRequest(id)
  }
    

  return (
    <div className="row">
      {characters.map((char) => (
        <div key={char.id} className="col-md-6 col-lg-3 mb-5 p">
            <div className="card" style={{minWidth: "200px"}}>
                <img src={char.image} alt={char.name} />
                <div className="card-body">
                  <h5 className="card-title" onClick={sendDetailRequest(char.id)}><Link to={`/${char.id}`}>{char.name}</Link></h5>
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
