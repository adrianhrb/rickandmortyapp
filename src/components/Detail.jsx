import React from "react";

const DetailCharacter = ({ character, detailRequest }) => {

    character.map((char) => {
      detailRequest(char.id)
    })

  return (
    <div className="row">
      character.map
        <div key={character.id} className="col-md-6 col-lg-3 mb-5 p">
            <div className="card" style={{minWidth: "200px"}}>
                <img src={character.image} alt={character.name} />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <hr />
                  <p><b>Location:</b> {character.location.name}</p>
                  <p><b>Species:</b> {character.species}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DetailCharacter;
