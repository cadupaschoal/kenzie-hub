import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledHomeContainer } from './homeContainer';
import Logo from '../../assets/images/Logo.svg';
import { userContext } from '../../Contexts/userContext';
import { TechCard } from '../../Components/TechCard';

export const HomePage = () => {
  const { user, logout, loading } = useContext(userContext);

  if (loading) {
    return <h2>Carregando página...</h2>; // -> Criar uma loading page
  }

  return (
    <StyledHomeContainer>
      <div className="logout-container">
        <figure>
          <img src={Logo} alt="Kenzie Hub" />
        </figure>
        <Link className="button-grey" onClick={logout} to={'/'}>
          Sair
        </Link>
      </div>
      <div className="border">
        <div className="welcome-container">
          <h1 className="title-1">Olá, {user.name}</h1>
          <p className="headline">{user.course_module}</p>
        </div>
      </div>
      <div className="techs__container">
        <div className="add__tech">
          <h1>Tecnologias</h1>
          <button className="button-grey" type="button">
            +
          </button>
        </div>
        <TechCard />
      </div>
    </StyledHomeContainer>
  );
};
