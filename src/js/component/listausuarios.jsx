import React, { useEffect, useState } from "react";

const ListaUsuarios = () => {

    const [usuarios , setUsuarios] = useState([]);

    function traerUsuarios() {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch(error => console.log('error', error));
    };

    useEffect ( ()=> {
        traerUsuarios();
    } , [] )


    return (

        <div>
        { usuarios.map ((i)=> <p>{i.name}</p> ) }
        </div>

    );
};

export default ListaUsuarios;
