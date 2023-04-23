import { useContext, useEffect } from 'react';
import { techsContext } from '../../Contexts/techsContext';
import { useForm } from 'react-hook-form';
import { createTechSchema } from '../../Services/Schemas/createTechSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledCreateModal } from './styled';

export const CreateModal = () => {
  const {
    showModalCreate,
    closeCreate,
    createTech,
    inputCreate,
    setInputCreate,
  } = useContext(techsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });

  useEffect(() => {
    setInputCreate('');
  }, [showModalCreate]);

  return showModalCreate ? (
    <StyledCreateModal>
      <div className="register">
        <h2 className="title-1">Cadastrar Tecnologia</h2>
        <button onClick={closeCreate}>X</button>
      </div>
      <form onSubmit={handleSubmit(createTech)} noValidate>
        <label htmlFor=""> Nome </label>
        <input
          type="text"
          placeholder="Tecnologia"
          {...register('title')}
          value={inputCreate}
          onChange={(e) => setInputCreate(e.target.value)}
        />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <label htmlFor="">Selecionar status</label>
        <select {...register('status')}>
          <option value="Iniciante"> Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status ? <p>{errors.status.message}</p> : null}
        <button type="submit" className="button-primary">
          Cadastrar Tecnologia
        </button>
      </form>
    </StyledCreateModal>
  ) : null;
};
