import { TagsContainer } from './styles';

type Props = {
  langKey: string;
  languages: string[];
};

const Tags = ({ langKey, languages }: Props) => (
  <TagsContainer>
    {languages.map((lang) => (
      <li key={`${langKey}-${lang}`}>{lang}</li>
    ))}
  </TagsContainer>
);
export default Tags;
