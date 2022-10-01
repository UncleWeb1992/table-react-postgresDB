import React, { ChangeEvent, FC } from "react";

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (target: { name: string; value: string }) => void;
  options: string[];
  name: string;
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="field">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select id={name} name={name} value={value} onChange={handleChange}>
        {/* <option disabled value="">
          {value}
        </option> */}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(SelectField);
