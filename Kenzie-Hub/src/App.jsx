import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/Login';
import { HomePage } from './Pages/Home';
import { RegisterPage } from './Pages/Register';
import { NotFoud } from './Pages/NotFound';
import { GlobalStyle } from './Styles/globalStyles';
import { GlobalInputs } from './Styles/inputs';
import { GlobalButtons } from './Styles/buttons';
import { GlobalTypography } from './Styles/typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './Styles/toast';
import { UserProvider } from './Contexts/userContext';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledToastContainer autoClose={2000} theme="dark" />
      <GlobalInputs />
      <GlobalButtons />
      <GlobalTypography />
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoud />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
