import * as S from './styles';

type Props = {
  type: 'button' | 'submit';
  children: string;
};

const Button = ({ type, children }: Props) => {
  return <S.buttonStyle type={type}>{children}</S.buttonStyle>;
};

export default Button;
