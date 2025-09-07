import type { IconType } from "react-icons";
import { StyledInputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  label: string;
  id: string;
}

const Input = ({ icon: Icon, label, id, ...rest }: InputProps) => {
  return (
    <StyledInputContainer>
      <div>
        <label htmlFor={id}>
          <input type="text" id={id} {...rest} />
          {label}
        </label>
      </div>
      {Icon && <Icon size={20} />}
    </StyledInputContainer>
  );
};

export default Input;
