import * as S from './styles';

export type Props = {
  id: string;
  title: string;
  background: 'bg1' | 'bg2';
  children: React.ReactElement;
};

const Section = ({ title, children, id, background }: Props) => {
  return (
    <S.Container id={id} background={background}>
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
