import React from "react";

export const DebounceExample: React.FC = () => {
  const [val, setVal] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <h2>Debounce Example</h2>
      <h3>No Debounce</h3>
      <input onChange={onChange} />
      <div>
      {val}
      </div>
    </div>
  );
};
