import React, { useCallback } from "react";

const NameInput = ({ username, setUsername }) => {
  const onChangeInput = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  return (
    <input className="name_input" value={username} onChange={onChangeInput} />
  );
};

export default NameInput;
