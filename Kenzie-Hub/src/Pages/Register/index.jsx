import { Input } from '../../Components/Inputs';
import { Option } from '../../Components/Options';
import { Link } from 'react-router-dom';
import { StyledRegisterContainer } from './registerContainer';
import Logo from '../../assets/images/Logo.svg';
import { useContext } from 'react';
import { userContext } from '../../Contexts/userContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../Services/Schemas/registerSchema';
import { useForm } from 'react-hook-form';
export const RegisterPage = () => {
  const { submitRegister } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <StyledRegisterContainer>
      <div className="logout-box">
        <figure>
          <img src={Logo} alt="Kenzie hub" />
        </figure>
        <Link className="button-grey" to={'/'}>
          Voltar
        </Link>
      </div>
      <div className="form__box">
        <h1 className="title-1">Crie sua conta</h1>
        <p className="headline">Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(submitRegister)} noValidate>
          <Input
            label="Nome: "
            type="string"
            placeholder="Nome"
            {...register('name')}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <Input
            label="E-mail: "
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            label="Senha: "
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <Input
            label="Confirmar senha: "
            type="password"
            placeholder="Confirmar senha"
            {...register('confirm')}
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          <Input
            label="Bio: "
            type="text"
            placeholder="Bio"
            {...register('bio')}
          />
          {errors.bio ? <p>{errors.bio.message}</p> : null}
          <Input
            label="Contato: "
            type="text"
            placeholder="Contato"
            {...register('contact')}
          />
          {errors.contact ? <p>{errors.contact.message}</p> : null}
          <select {...register('course_module', { required: true })}>
            <Option text="Selecione um módulo" value="" />
            <Option
              text="Primeiro Módulo"
              value="Primeiro módulo (Introdução ao Frontend)"
            />
            <Option
              text="Segundo Módulo"
              value="Segundo módulo (Frontend Avançado)"
            />
            <Option
              text="Terceiro Módulo"
              value="Terceiro módulo (Introdução ao Backend)"
            />
            <Option
              text="Quarto Módulo"
              value="Quarto módulo (Backend Avançado)"
            />
          </select>
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
          <button
            className={errors ? 'button-negative' : 'button-primary'}
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </StyledRegisterContainer>
  );
};
