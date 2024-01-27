import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import Character from './components/Characters'
import Pagination from './components/Pagination';


function App() {
  // Estado de la aplicación para almacenar los personajes de la API
  const [characters, setCharacters] = useState([])
  // Estado para información extra como las páginas anteriores y siguientes
  const [extraInfo, setExtraInfo] = useState({})

  const charListUrl = 'https://rickandmortyapi.com/api/character'

  const requestCharacters = (url) => {
    // Llamada a la Api de Rick and Morty
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setCharacters(data.results)
        setExtraInfo(data.info)
    })
    .catch(error => console.log('Something went wrong'))
  }

  const pagePrevious = () => {
    requestCharacters(extraInfo.prev)
  }

  const pageNext = () => {
    requestCharacters(extraInfo.next)
  }

  useEffect(() => {
    requestCharacters(charListUrl)
  }, [])

  return (
    <>
      <Navbar brand='Rick and Morty App' />
      <div className='container mt-5'>
        <Character characters={characters}/>
        <Pagination prevExistance={extraInfo.prev}
        nextExistence={extraInfo.next} 
        pageNext={pageNext} 
        pagePrevious={pagePrevious}/>
      </div>
    </>
  );
}

export default App;
