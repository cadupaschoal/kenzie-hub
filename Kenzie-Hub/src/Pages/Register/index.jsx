import { api } from '../../Services/API/api';
import { Input } from '../../Components/Inputs';
import { Option } from '../../Components/Options';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../Services/Schemas/registerSchema';
import { Link, useNavigate } from 'react-router-dom';
import { StyledRegisterContainer } from '../../Styles/ComponentsStyles/registerContainer';
import Logo from '../../assets/images/Logo.svg';
import { toast } from 'react-toastify';
export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const submit = async (formData) => {
    const { name, password, email, bio, course_module, contact } = formData;
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
        bio: bio,
        contact: contact,
        course_module: course_module,
      });
      if (response.status === 201) {
        toast.success('Cadastro realizado com sucesso');
        setTimeout(() => {
          navigate('/');
        }, 2100);
      }
    } catch (error) {
      console.log(error);
      error.response.data.message === 'Email already exists'
        ? toast.error('E-mail já cadastrado')
        : toast.error('Ops, algo deu errado');
    }
  };

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
        <form onSubmit={handleSubmit(submit)} noValidate>
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
