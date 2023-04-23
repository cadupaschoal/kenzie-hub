import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledHomeContainer } from './homeContainer';
import Logo from '../../assets/images/Logo.svg';
import { userContext } from '../../Contexts/userContext';
import { TechCard } from '../../Components/TechCard';
import { EditModal } from '../../Components/EditModal';
import { CreateModal } from '../../Components/CreateModal';
import { techsContext } from '../../Contexts/techsContext';
import { LoadingPage } from '../Loading';
export const HomePage = () => {
  const { user, setUser, logout, loading } = useContext(userContext);
  const { openCreateTech } = useContext(techsContext);

  if (loading) {
    return <LoadingPage />;
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
      <div className="add__tech">
        <h2 className="title-1">Tecnologias</h2>
        <button className="button-grey" type="button" onClick={openCreateTech}>
          +
        </button>
      </div>

      <div className="techs__container">
        <TechCard />
      </div>
      <CreateModal />
      <EditModal />
    </StyledHomeContainer>
  );
};
