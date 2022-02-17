import { RandomNumberScreen } from './pages/randomNumber/randomNumber';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RandomNumberScreen />} />
				<Route path="*" element={<div>ErrorScreen</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
