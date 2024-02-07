import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Character from "./components/Characters";
import Pagination from "./components/Pagination";
import DetailCharacter from './components/Detail';

function App() {
  // Estado de la aplicación para almacenar los personajes de la API
  const [characters, setCharacters] = useState([]);
  // Estado para información extra como las páginas anteriores y siguientes
  const [extraInfo, setExtraInfo] = useState({});
  // Estado para gaurdar el detalle de personaje consultado;
  const [singleCharacter, setSingleCharacter] = useState({})

  const charListUrl = "https://rickandmortyapi.com/api/character";

  const requestCharacters = (url) => {
    // Llamada a la Api de Rick and Morty
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Cambiamos los estados de characters y la extra info
        setCharacters(data.results);
        setExtraInfo(data.info);
      })
      .catch((error) => console.log("Something went wrong"));
  };

  // Función para la petición del detalle de un personaje (1 solo personaje)
  const singleCharRequest = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setSingleCharacter(data.results);
    })
    .catch((error) => console.log("Something went wrong"));
  }

  const pagePrevious = () => {
    // Mandamos una petición para obtener los personajes de la página anterior
    requestCharacters(extraInfo.prev);
  };

  const pageNext = () => {
    // Mandamos una petición para obtener los personajes de la página anterior
    requestCharacters(extraInfo.next);
  };

  const detailCharacter = (charId) => {
    const detailUrl = `${charListUrl}/${charId}/`
    singleCharRequest(detailUrl)
  }

  useEffect(() => {
    requestCharacters(charListUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={[
              <Character characters={characters} detailRequest={detailCharacter} />,
              <Pagination
                prevExistance={extraInfo.prev}
                nextExistence={extraInfo.next}
                pageNext={pageNext}
                pagePrevious={pagePrevious}
              />,
            ]}
          />
          <Route path="/:charId/" element={<DetailCharacter char={singleCharacter} detailRequest={detailCharacter} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
