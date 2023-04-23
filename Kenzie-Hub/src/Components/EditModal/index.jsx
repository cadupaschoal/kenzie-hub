import { useContext, useEffect } from 'react';
import { techsContext } from '../../Contexts/techsContext';
import { useForm } from 'react-hook-form';
import { editModalSchema } from '../../Services/Schemas/editTechlSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../Services/API/api';
import { StyledEditModal } from './styled';
import { toast } from 'react-toastify';
import { userContext } from '../../Contexts/userContext';

export const EditModal = () => {
  const {
    showModalEdit,
    setShowModalEdit,
    currentTech,
    setCurrentTech,
    closeEditTech,
    updateUserTech,
    token,
  } = useContext(techsContext);

  const { user, setUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editModalSchema),
  });
  const deleteTech = async (techId) => {
    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModalEdit(false);
      setCurrentTech([]);
      updateDelete(techId);
      toast.success('Tecnologia excluída com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir tecnologia');
    }
  };

  const updateDelete = (elementId) => {
    const newList = user.techs.filter((tech) => tech.id !== elementId);
    setUser({ ...user, techs: newList });
  };

  return showModalEdit ? (
    <StyledEditModal>
      <div className="details">
        <h2 className="title-1">Tecnologia Detalhes</h2>
        <button
          onClick={() => {
            closeEditTech();
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(updateUserTech)}>
        <label htmlFor={currentTech.title}> Nome do projeto</label>
        <input
          readOnly
          type="text"
          value={currentTech.title}
          name={currentTech.title}
          id={currentTech.title}
        />
        <label htmlFor="status">Status</label>
        <select name="status" id="status" {...register('status')}>
          <option value="Iniciante"> Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status ? <p>{errors.status.message}</p> : null}
        <div className="buttons">
          <button type="submit" className="button-negative">
            {' '}
            Salavar alterações
          </button>
          <button
            type="button"
            className="button-disabled"
            onClick={() => deleteTech(currentTech.id)}
          >
            {' '}
            Excluir{' '}
          </button>
        </div>
      </form>
    </StyledEditModal>
  ) : null;
};
