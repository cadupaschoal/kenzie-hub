import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/Login';
import { HomePage } from './Pages/Home';
import { RegisterPage } from './Pages/Register';
import { NotFoud } from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoud />} />
      </Routes>
    </div>
  );
}

export default App;
