import { Input } from '../../Components/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StyledLoginContainer } from './loginContainer';
import Logo from '../../assets/images/Logo.svg';
import { userContext } from '../../Contexts/userContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../Services/Schemas/loginSchema';

export const LoginPage = () => {
  const { login } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <StyledLoginContainer>
      <figure>
        <img src={Logo} alt="Kenzie Hub" />
      </figure>
      <div className="form__box">
        <h1 className="title-1">Login</h1>
        <form onSubmit={handleSubmit(login)} noValidate>
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
          <button className="button-primary" type="submit">
            Entrar
          </button>
        </form>
        <div className="toRegister-box">
          <p className="headline">Ainda não possui conta?</p>
          <Link className="button-disabled" to={'/register'}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </StyledLoginContainer>
  );
};
