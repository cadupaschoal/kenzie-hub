import { useContext, useEffect } from 'react';
import { techsContext } from '../../Contexts/techsContext';
import { useForm } from 'react-hook-form';
import { editModalSchema } from '../../Services/Schemas/editTechlSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../Services/API/api';
import { StyledEditModal } from './styled';
import { toast } from 'react-toastify';

export const EditModal = () => {
  const {
    showModalEdit,
    setShowModalEdit,
    currentTech,
    setCurrentTech,
    closeEditTech,
    editTech,
    token,
  } = useContext(techsContext);

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
      toast.success('Tecnologia excluída com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir tecnologia');
    }
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
      <form onSubmit={handleSubmit(editTech)}>
        <label htmlFor={currentTech.title}> Nome do projeto</label>
        <input
          type="text"
          defaultValue={currentTech.title}
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
