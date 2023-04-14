import { useContext } from 'react';
import { userContext } from '../../Contexts/userContext';
export const TechCard = () => {
  const { user } = useContext(userContext);
  console.log(user.techs);
  const { techs } = user;

  return techs.map((tech) => (
    <div key={tech.id} className="tech__card">
      <h1>{tech.title}</h1>
      <p>{tech.status}</p>
    </div>
  ));
};
