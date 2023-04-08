import { Input } from '../../Components/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../Services/Schemas/loginSchema';
import { api } from '../../Services/API/api';
import { useState } from 'react';
import { StyledLoginContainer } from '../../Styles/ComponentsStyles/loginContainer';
import Logo from '../../assets/images/Logo.svg';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const submit = async (formData) => {
    try {
      const response = await api.post('/sessions', formData);
      if (response.status === 200) {
        navigate('/home');
        setUser(response.data.user);
        localStorage.setItem('@TOKEN', response.data.token);
        localStorage.setItem('@USERID', response.data.user.id);
      }
    } catch (error) {
      toast.error('Ops, algo deu errado');
    }
  };

  return (
    <StyledLoginContainer>
      <figure>
        <img src={Logo} alt="Kenzie Hub" />
      </figure>
      <div className="form__box">
        <h1 className="title-1">Login</h1>
        <form onSubmit={handleSubmit(submit)} noValidate>
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
