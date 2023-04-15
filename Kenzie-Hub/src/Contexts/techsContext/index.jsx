import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../Services/API/api';
import { userContext } from '../userContext';

export const techsContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem('@TOKEN');
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [currentTech, setCurrentTech] = useState([]);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    const updateUserTechs = async () => {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
      } catch (error) {}
    };
    updateUserTechs();
  }, [currentTech]);

  const createTech = async (data) => {
    try {
      const response = await api.post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (data) => {
    console.log(currentTech.id);
    try {
      const response = await api.put(`users/techs/${currentTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditTech = (techId, techs) => {
    const techEdit = techs.find((tech) => techId === tech.id);
    setCurrentTech(techEdit);
    setShowModalEdit(true);
  };

  const closeEditTech = () => {
    setCurrentTech([]);
    setShowModalEdit(false);
  };

  const openCreateTech = () => {
    setShowModalCreate(true);
  };

  const closeCreate = () => {
    setShowModalCreate(false);
  };

  return (
    <techsContext.Provider
      value={{
        token,
        showModalEdit,
        setShowModalEdit,
        showModalCreate,
        setShowModalCreate,
        openEditTech,
        closeEditTech,
        openCreateTech,
        closeCreate,
        currentTech,
        setCurrentTech,
        createTech,
        editTech,
      }}
    >
      {children}
    </techsContext.Provider>
  );
};
