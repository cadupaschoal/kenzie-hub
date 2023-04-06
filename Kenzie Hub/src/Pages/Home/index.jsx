import { api } from '../../Services/API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <>
      <div>
        <h1>Home Page</h1>
        <button onClick={logout}>Sair</button>
      </div>
      <h2>Olá, {userData.name}</h2>
      <h2>{userData.course_module}</h2>
    </>
  );
};
