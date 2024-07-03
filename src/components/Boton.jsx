import React from 'react';
import style from './boton.module.css';
const Boton = () => {
	const handleClick = () => {
		alert('Hola');
	};
	return (
		<button className={style.boton} onClick={handleClick}>
			Select
		</button>
	);
};

export default Boton;
