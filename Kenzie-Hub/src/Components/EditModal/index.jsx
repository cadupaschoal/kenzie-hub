import { useContext, useEffect } from 'react';
import { techsContext } from '../../Contexts/techsContext';
import { useForm } from 'react-hook-form';
import { editModalSchema } from '../../Services/Schemas/editTechlSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../Services/API/api';

export const EditModal = () => {
  const { showModalEdit, currentTech, closeEditTech, editTech, token } =
    useContext(techsContext);

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(techId);
  };

  return showModalEdit ? (
    <div role="dialog">
      <button
        onClick={() => {
          console.log(currentTech), closeEditTech();
        }}
      >
        X
      </button>
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
        <button type="submit" name="editButton">
          {' '}
          Salavar alterações
        </button>
        <button type="button" onClick={() => deleteTech(currentTech.id)}>
          {' '}
          Excluir{' '}
        </button>
      </form>
    </div>
  ) : null;
};
