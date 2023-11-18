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
      <>
        <div className="container my-5" style={{ width: "50rem" }}>

          <div className="position-relative p-5 text-center text-muted fondo rounded-3">
            <h1 className="text-body-emphasis display-4">Listado de usuarios</h1>
            <h5 className="col-lg-6 mx-auto" >
              Estos usuarios han sido traídos desde <span><a className="p" style={{ textDecoration: "none" }} href="https://jsonplaceholder.typicode.com/">ESTA API</a></span></h5>
            <br />

            {usuarios.map((i) =>

              <div className="container bordec text-center">
                <div className="row">
                  <div className="col" style={{ marginTop: "20px", }}>

                    <div className="card" >
                      <div className="card-body">
                        <h2 className="card-title display-6" style={{ marginTop: "5px" }}>{i.name}</h2>
                        <h6 className="card-subtitle mb-2 text-body-secondary" style={{ marginTop: "28px" }}>{i.email}</h6>
                        <h6 className="card-text">{i.phone}</h6>
                        <p className="card-text">{i.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
};

export default ListaUsuarios;
