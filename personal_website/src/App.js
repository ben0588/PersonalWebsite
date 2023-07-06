import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

import HomePage from './pages/homePage/HomePage';
import HomePersonalInfoSection from './pages/homePage/HomePersonalInfoSection';
import WorkSamplesPage from './pages/WorkSamplesPage/WorkSamplesPage';
import AboutPage from './pages/aboutPage/AboutPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/workSamples' element={<WorkSamplesPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
