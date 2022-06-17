import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/Login';
import NotFound from "./components/NotFound/404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}


export default App;
