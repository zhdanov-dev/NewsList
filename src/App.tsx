import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/newsPage/NewsPage';
import ThemesPage from './pages/themesPage/ThemesPage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/news' element={<NewsPage />} />
				<Route path='/themes' element={<ThemesPage />} />
			</Routes>
		</>
	);
}

export default App;
