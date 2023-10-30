import React from 'react';

function Hobbies() {
    const hobbies = [
        {
            id: 1,
            nombre: 'Musica',
            descripcion: 'Tocar el bajo y la guitarra.',
        },
        {
            id: 2,
            nombre: 'Entrenamiento',
            descripcion: 'Hacer ejercicio al aire libre.',
        },
        {
            id: 3,
            nombre: 'Programar',
            descripcion: 'Aprender tecnologias de programacion y crear proyectos.',
        },
        {
            id: 4,
            nombre: 'Lectura',
            descripcion: 'leer diversos libros.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;

