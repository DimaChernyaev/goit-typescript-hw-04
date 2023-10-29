import React, { ChangeEvent, ReactElement, useState } from "react";

export function FormComponent(): ReactElement {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
