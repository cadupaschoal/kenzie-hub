import { createContext, useEffect, useState } from 'react';
import { api } from '../../Services/API/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('@TOKEN');
  const userId = localStorage.getItem('@USERID');

  const login = async (formData) => {
    try {
      const response = await api.post('/sessions', formData);
      if (response.status === 200) {
        navigate('/home');
        setUser(response.data.user);
        localStorage.setItem('@TOKEN', response.data.token);
        localStorage.setItem('@USERID', response.data.user.id);
      }
    } catch (error) {
      toast.error('Ops, algo deu errado');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
  };

  const submitRegister = async (formData) => {
    const { name, password, email, bio, course_module, contact } = formData;
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
        bio: bio,
        contact: contact,
        course_module: course_module,
      });
      if (response.status === 201) {
        toast.success('Cadastro realizado com sucesso');
        setTimeout(() => {
          navigate('/');
        }, 2100);
      }
    } catch (error) {
      error.response.data.message === 'Email already exists'
        ? toast.error('E-mail já cadastrado')
        : toast.error('Ops, algo deu errado');
    }
  };

  useEffect(() => {
    const tokenVerify = async () => {
      if (!token) {
        navigate('/');
      }
      try {
        const response = await api.get('/profile ', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        localStorage.clear();
      }
    };

    tokenVerify();
  }, [token]);

  //HOME
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userInfos = async () => {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    userInfos();
  }, []);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        submitRegister,
        token,
        userId,
        navigate,
        loading,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
