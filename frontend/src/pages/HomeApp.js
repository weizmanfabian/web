import React from 'react';

import img from '../assets/img/hola.jpg'

const HomeApp = ({ user }) => {

    return (
        <div className='container'>
            <div className="row text-center align-items-center justify-content-center">
                <div className="card" style={{ "width": "30rem" }}>
                    <img src={img} className="card-img-top" alt="Imagen" />
                    <div className="card-body">
                        <h1>Bienvenido {user.nombre} es un gusto tenerte con nosotros</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeApp;