import { useContext } from 'react';
import { userContext } from '../../Contexts/userContext';
import { techsContext } from '../../Contexts/techsContext';
export const TechCard = () => {
  const { user } = useContext(userContext);
  const { openEditTech } = useContext(techsContext);
  const { techs } = user;

  return techs.map((tech) => (
    <div
      key={tech.id}
      className="tech__card"
      onClick={() => {
        openEditTech(tech.id, techs);
      }}
    >
      <h2 className="title-1">{tech.title}</h2>
      <p className="headline">{tech.status}</p>
    </div>
  ));
};
