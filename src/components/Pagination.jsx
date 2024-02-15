import React from "react";

// Reciben como props unos "condicionales" para ver si hay o no páginas siguientes o anteriores
// y las funciones que van a manejar el cambio de página
const Pagination = ({
  prevExistance,
  nextExistence,
  pagePrevious,
  pageNext,
}) => {
  // En el click, llama a la función de moverse a la página anterior
  const previousPage = () => {
    pagePrevious();
  };

  // En el click, llama a la función de moverse a la página siguiente
  const nextPage = () => {
    pageNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {/* Si hay next o previous se muestra el botón,en caso de que no, no se muestra nada */}
        {prevExistance ? (
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Previous
            </button>
          </li>
        ) : null}

        {nextExistence ? (
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
