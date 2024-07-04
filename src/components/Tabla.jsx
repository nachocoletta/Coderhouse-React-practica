import React from 'react';
import style from './tabla.module.css';
import Boton from './Boton';
const Tabla = () => {
	let contador = 0;
	const proveedores = [
		{
			name: 'Iacob Geaorgescu',
			email: 'iacob@test-email.com',
		},
		{
			name: 'Julius Neumann',
			email: 'julius@test-email.com',
		},
		{
			name: 'Christoph Koller',
			email: 'christoph@test-email.com',
		},
		{
			name: 'Bram Lemmens',
			email: 'bram@test-email.com',
		},
	];
	return (
		<div className={style.contenedor}>
			<table className={style.tabla}>
				<thead className={style.tablaEncabezadoImpar}>
					<tr>
						<th>Provider Name</th>
						<th>E-mail</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{proveedores?.map((proveedor, index) => {
						contador++;
						return (
							<tr
								className={
									index % 2 === 0
										? style.tablaEncabezadoPar
										: style.tablaEncabezadoImpar
								}
							>
								<td>{proveedor.name}</td>
								<td>{proveedor.email}</td>
								<td>
									<Boton idBoton={proveedor.name} />
								</td>
							</tr>
						);
					})}
					<tr>
						<td
							className={
								contador % 2 === 0 ? style.parrafoImpar : style.parrafoPar
							}
							colSpan="3"
						>
							Year 2014
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Tabla;
