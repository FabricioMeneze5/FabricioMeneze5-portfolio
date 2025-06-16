import * as S from './styles';

type Props = {
  title: string;
  children: React.ReactElement;
};

const Section = ({ title, children }: Props) => {
  return (
    <S.Container id="projects">
      <S.Title>
        <b>##</b>
        <h2>{title}</h2>
        <b>##</b>
      </S.Title>
      <S.Content className="container">{children}</S.Content>
    </S.Container>
  );
};

export default Section;
