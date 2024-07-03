import { useState } from 'react';
import './App.css';
import Tabla from './components/Tabla';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1>PARA LOS QUE QUIERAN MAS</h1>
				<Tabla />
			</div>
		</>
	);
}

export default App;
