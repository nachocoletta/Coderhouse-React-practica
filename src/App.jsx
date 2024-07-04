import { useState } from 'react';

import Tabla from './components/Tabla';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Tabla />
		</>
	);
}

export default App;
