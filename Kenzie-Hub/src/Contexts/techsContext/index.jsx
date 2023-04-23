import { createContext, useContext, useState } from 'react';
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

  const createTech = async (data) => {
    const verify = user.techs.find((tech) => tech.title === data.title);
    if (verify) {
      toast.warn('Este usuário já possui esta tecnologia');
    } else {
      try {
        const response = await api.post('/users/techs', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 201) {
          setShowModalCreate(false);
          createUserTech(response.data);
          setCurrentTech(response.data);
          toast.success('Tecnologia adicionada com sucesso');
        }
      } catch (error) {
        toast.error('Não foi possível adicionar a tecnologia');
      }
    }
  };

  const editTech = async (data) => {
    try {
      const response = await api.put(`users/techs/${currentTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        const updated = user.techs.filter(
          (tech) => tech.id !== response.data.id
        );
        const newList = [...updated, response.data];
        setUser({ ...user, techs: newList });
        toast.success('Tecnologia atualizada com sucesso');
        setShowModalEdit(false);
      }
    } catch (error) {
      toast.error('Não foi possível atualizar a tecnologia');
    }
  };

  const createUserTech = (element) => {
    const newList = [element, ...user.techs];
    setUser({ ...user, techs: newList });
  };

  const updateUserTech = (element) => {
    if (currentTech.status === element.status) {
      toast.warn('Nenhuma alteração foi feita');
    } else {
      editTech(element);
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
        updateUserTech,
      }}
    >
      {children}
    </techsContext.Provider>
  );
};
