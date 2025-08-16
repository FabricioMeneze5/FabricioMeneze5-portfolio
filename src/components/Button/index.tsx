import * as S from './styles';

type BaseProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
};

type LinkButtonProps = BaseProps & {
  type: 'link';
  url: string;
};

type RegularButtonProps = BaseProps & {
  type: 'button' | 'submit';
  url?: never;
};

type Props = LinkButtonProps | RegularButtonProps;

const Button = ({ type, children, disabled, onClick, url }: Props) => {
  return (
    <>
      {type === 'submit' || type === 'button' ? (
        <S.buttonStyle type={type} disabled={disabled} onSubmit={onClick}>
          {children}
        </S.buttonStyle>
      ) : (
        <S.buttonStyle as="a" target="_blank" href={url}>
          {children}
        </S.buttonStyle>
      )}
    </>
  );
};

export default Button;
