import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Character from "./components/Characters";
import Pagination from "./components/Pagination";
import Details from "./pages/Details";

function App() {
  // Estado de la aplicación para almacenar los personajes de la API
  const [characters, setCharacters] = useState([]);
  // Estado para información extra como las páginas anteriores y siguientes
  const [extraInfo, setExtraInfo] = useState({});

  // Url a la que hacemos las peticiones
  const charListUrl = "https://rickandmortyapi.com/api/character";

  const requestCharacters = (url) => {
    // Llamada a la Api de Rick and Morty
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Cambiamos los estados de characters
        setCharacters(data.results);
        // Guardamos la información extra cambiando el estado
        setExtraInfo(data.info);
      })
      .catch((error) => console.log("Something went wrong"));
  };

  const pagePrevious = () => {
    // Mandamos una petición para obtener los personajes de la página anterior
    requestCharacters(extraInfo.prev);
  };

  const pageNext = () => {
    // Mandamos una petición para obtener los personajes de la página anterior
    requestCharacters(extraInfo.next);
  };

  useEffect(() => {
    requestCharacters(charListUrl);
  }, []);

  return (
    <>
      {/* Importamos todos los componentes que tenemos y les pasamos las variables que necesitan */}
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={[
              <Character characters={characters} />,
              <Pagination
                prevExistance={extraInfo.prev}
                nextExistence={extraInfo.next}
                pageNext={pageNext}
                pagePrevious={pagePrevious}
              />,
            ]}
          />
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
