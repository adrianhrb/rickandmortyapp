import React from "react";



// Hacemos usos de las props para poder modificar el título del NavBar
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Rick and Morty" style={{width: "100%"}}/>
            </div>
        </nav>
    )
}

export default Navbar