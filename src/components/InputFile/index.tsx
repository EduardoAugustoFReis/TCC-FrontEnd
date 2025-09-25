import type React from "react";
import { InputFilePreviewContainer } from "./styles";
import { useState } from "react";

interface InputFilePreviewProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFilePreview = ({ id, label, onChange, ...rest }: InputFilePreviewProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }

    if (onChange) onChange(e); // repassa para o pai
  };

  return (
    <InputFilePreviewContainer>
      <label htmlFor={id} className="buttonPreview" >{label}</label>
      <input
        type="file"
        id={id}
        name={id}
        onChange={handleChange}
        {...rest}
      />
      {preview && <img src={preview} alt={`Imagem do avatar`} />}
    </InputFilePreviewContainer>
  );
};

export default InputFilePreview;
