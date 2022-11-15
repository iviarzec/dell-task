import './Button.component.scss';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
