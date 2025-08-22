import { TagsContainer } from './styles';

type Colors = {
  [key: string]: string;
};

const colors: Colors = {
  React: '#0A7EA4',
  C: '#283593',
  TypeScript: '#255b96',
  JavaScript: '#C99A06',
  jQuery: '#22435a',
  Java: '#B07219',
  CSS: '#264DE4',
  SASS: '#C6538C',
  'Styled-Components': '#1F2D3D',
  Less: '#4D3A7D',
  Parcel: '#7C3AED',
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
