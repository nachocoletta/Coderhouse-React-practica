import React from 'react';
import style from './boton.module.css';
const Boton = ({ idBoton }) => {
	const handleClick = (id) => {
		alert('Hola ' + id);
	};
	return (
		<button className={style.boton} onClick={() => handleClick(idBoton)}>
			Select
		</button>
	);
};

export default Boton;
