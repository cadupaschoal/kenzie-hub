import { Input } from '../../Components/Inputs';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../Services/Schemas/loginSchema';
import { api } from '../../Services/API/api';
import { useState } from 'react';

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

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

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
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
          type={'password'}
          placeholder={'Senha'}
          {...register('password')}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui conta?</p>
        <button onClick={handleRegister}>Cadastre-se</button>
      </div>
    </div>
  );
};
