import React, {useState, useEffect} from 'react';

export interface Props {
  legend: string,
  value: string,
  options: {
    label: string;
    value: string;
  }[];
}

export default function Select(props: Props) {

  const [selected, setSelected] = useState(props.value);

  // Notice:
  // Have to update state to allow applying changes from "Knobs"
  useEffect(() => {
    setSelected(props.value)
  }, [props.value])

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
