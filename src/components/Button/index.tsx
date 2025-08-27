import * as S from './styles';

type BaseProps = {
  children: string;
  onClick?: () => void;
  onSubmit?: () => void;
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

const Button = ({ type, children, disabled, onClick, onSubmit, url }: Props) => {
  const hasLink = () => {
    if (url === null || url === '') {
      return (disabled = true);
    }
  };
  return (
    <>
      {type === 'submit' ? (
        <S.buttonStyle type={type} disabled={disabled} onSubmit={onSubmit}>
          {children}
        </S.buttonStyle>
      ) : type === 'button' ? (
        <S.buttonStyle type={type} disabled={disabled} onClick={onClick}>
          {children}
        </S.buttonStyle>
      ) : (
        <S.buttonStyle as="a" disabled={hasLink()} href={url} target="_blank">
          {children}
        </S.buttonStyle>
      )}
    </>
  );
};

export default Button;
