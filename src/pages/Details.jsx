import { useEffect, useState } from "react";

export default function Details() {
  const [character, setCharacter] = useState({});

  const handlechar = () => {
    const idcharacter = window.location.href[window.location.href.length - 1]; //:todo fix
    fetch(`https://rickandmortyapi.com/api/character/${idcharacter}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacter(data);
        console.log("--->", character);
      })
      .catch((error) => console.log("Something went wrong"));
  };

  useEffect(() => {
    handlechar();
  }, []);

  return (
    <>
      <h1>Pagina de Detalle</h1>
      <p>{character.name}</p>
    </>
  );
}
