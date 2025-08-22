import { TagsContainer } from './styles';

type Colors = {
  [key: string]: string;
};

const colors: Colors = {
  React: '#0A7EA4',
  C: '#283593',
  TypeScript: '#255b96',
  JavaScript: '#C99A06',
  Java: '#B07219',
  CSS: '#264DE4',
  SCSS: '#C6538C',
  Redux: '#764ABC',
  Bootstrap: '#563D7C',
  HTML: '#D35400',
  Node: '#3C873A',
  default: '#444444',
};

type Props = {
  langKey: string;
  languages: string[];
};

const Tags = ({ langKey, languages }: Props) => (
  <TagsContainer>
    {languages.map((lang) => (
      <li key={`${langKey}-${lang}`} style={{ backgroundColor: colors[lang] || colors.default }}>
        {lang}
      </li>
    ))}
  </TagsContainer>
);
export default Tags;
