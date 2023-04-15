import { useContext } from 'react';
import { userContext } from '../../Contexts/userContext';
import { techsContext } from '../../Contexts/techsContext';
export const TechCard = () => {
  const { user } = useContext(userContext);
  const { openEditTech } = useContext(techsContext);
  console.log(user.techs);
  const { techs } = user;

  return techs.map((tech) => (
    <div
      key={tech.id}
      className="tech__card"
      onClick={() => {
        openEditTech(tech.id, techs);
      }}
    >
      <h1>{tech.title}</h1>
      <p>{tech.status}</p>
    </div>
  ));
};
