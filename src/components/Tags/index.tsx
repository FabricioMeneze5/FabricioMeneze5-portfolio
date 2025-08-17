import { TagsContainer } from './styles';
import { fetchProjects, Project } from '../../Service/api';
import { useEffect, useState } from 'react';

const Tags = () => {
  const [getRepo, setRepo] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setRepo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TagsContainer>
      {getRepo.map((res) =>
        res.languages.map((lang) => <li key={`${res.name}-${lang}`}>{lang}</li>),
      )}
    </TagsContainer>
  );
};
export default Tags;
