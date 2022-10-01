import { ChangeEvent, FC } from "react";

interface TextFieldProps {
  value: string;
  name: string;
  label: string;
  onChange: (target: { name: string; value: string }) => void;
  error: string | null;
  placeholder: string;
}

const TextField: FC<TextFieldProps> = ({
  value,
  name,
  label,
  onChange,
  error,
  placeholder,
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <span className="material-symbols-outlined">search</span>
      <input
        name={name}
        id={name}
        onChange={handleChange}
        type="text"
        value={value}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TextField;
