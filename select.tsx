import React, {useState} from 'react';

export interface Props {
  legend: string,
  options: {
    label: string;
    value: string;
  }[];
}

export default function Select(props: Props) {

  const [selected, setSelected] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <label>
        {props.legend}
        <select onChange={handleChange} value={selected}>
          {props.options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
