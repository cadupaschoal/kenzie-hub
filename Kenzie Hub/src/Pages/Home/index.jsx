import { api } from '../../Services/API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHomeContainer } from '../../Styles/ComponentsStyles/homeContainer';
import Logo from '../../assets/images/Logo.svg';
export const HomePage = () => {
  const userId = localStorage.getItem('@USERID');
  const token = localStorage.getItem('@TOKEN');
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const userInfos = async () => {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    userInfos();
  }, []);

  if (loading) {
    return <h2>Carregando página...</h2>;
  }

  return (
    <StyledHomeContainer>
      <div className="logout-container">
        <figure>
          <img src={Logo} alt="Kenzie Hub" />
        </figure>
        <button className="button-grey" onClick={logout}>
          Sair
        </button>
      </div>
      <div className="border">
        <div className="welcome-container">
          <h1 className="title-1">Olá, {userData.name}</h1>
          <p className="headline">{userData.course_module}</p>
        </div>
      </div>
      <div className="without-content">
        <h2 className="title-1">Que pena estamos em desenvolvimento :(</h2>
        <p className="headline">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledHomeContainer>
  );
};
