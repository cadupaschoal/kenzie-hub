import { useContext } from 'react';
import { techsContext } from '../../Contexts/techsContext';
import { useForm } from 'react-hook-form';
import { createTechSchema } from '../../Services/Schemas/createTechSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateModal = () => {
  const { showModalCreate, closeCreate, createTech } = useContext(techsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });

  return showModalCreate ? (
    <div role="dialog">
      <button
        onClick={() => {
          closeCreate();
        }}
      >
        X
      </button>
      <form onSubmit={handleSubmit(createTech)}>
        <label htmlFor=""> Nome</label>
        <input type="text" placeholder="Tecnologia" {...register('title')} />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <label htmlFor="">Selecionar status</label>
        <select {...register('status')}>
          <option value="Iniciante"> Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status ? <p>{errors.status.message}</p> : null}
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </div>
  ) : null;
};
