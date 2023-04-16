import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../Services/API/api';
import { userContext } from '../userContext';
import { toast } from 'react-toastify';

export const techsContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem('@TOKEN');
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [currentTech, setCurrentTech] = useState([]);
  const { user, setUser } = useContext(userContext);
  const [inputCreate, setInputCreate] = useState('');

  useEffect(() => {
    const updateUserTechs = async () => {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser({ ...user, techs: response.data.techs });
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    updateUserTechs();
  }, [showModalCreate, showModalEdit]);

  const createTech = async (data) => {
    try {
      const response = await api.post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInputCreate('');
      setShowModalCreate(false);
      toast.success('Tecnologia adicionada com sucesso');
      setCurrentTech(response.data);
    } catch (error) {
      toast.error('Não foi possível adicionar a tecnologia');
    }
  };

  const editTech = async (data) => {
    try {
      const response = await api.put(`users/techs/${currentTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModalEdit(false);
      toast.success('Tecnologia atualizada com sucesso');
    } catch (error) {
      toast.error('Não foi possível atualizar a tecnologia');
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
    setInputCreate('');
    setShowModalCreate(false);
    setCurrentTech([]);
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
        inputCreate,
        setInputCreate,
      }}
    >
      {children}
    </techsContext.Provider>
  );
};
