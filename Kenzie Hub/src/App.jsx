import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/Login';
import { HomePage } from './Pages/Home';
import { RegisterPage } from './Pages/Register';
import { NotFoud } from './Pages/NotFound';
import { GlobalStyle } from './Styles/Globals/globalStyles';
import { GlobalInputs } from './Styles/Globals/inputs';
import { GlobalButtons } from './Styles/Globals/buttons';
import { GlobalTypography } from './Styles/Globals/typography';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalInputs />
      <GlobalButtons />
      <GlobalTypography />
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
