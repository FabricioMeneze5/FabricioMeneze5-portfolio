import * as S from './styles';

export type Props = {
  id: string;
  title: string;
  $bgColor: 'bg1' | 'bg2';
  children: React.ReactElement;
  $isLast?: boolean;
};

const Section = ({ title, children, id, $bgColor, $isLast }: Props) => {
  return (
    <S.Container id={id} $bgColor={$bgColor} $isLast={$isLast}>
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
