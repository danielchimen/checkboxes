import type { ChangeEvent } from "react";
import { Checkbox as Box } from "./types";
import styles from "./Checkbox.module.css";

type Props = {
  data: Box;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = (props: Props) => {
  const { data, onChange } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div key={data.value} className={styles.checkbox}>
      <input
        type="checkbox"
        id={`checkbox-${data.labels[0]}`}
        name={data.labels[0]}
        value={data.value}
        className="mr-2"
        onChange={(e) => handleOnChange(e)}
        checked={data.checked}
      />
      <label htmlFor={`checkbox-${data.labels[0]}`} className="mr-2">
        {data.labels[0]}
      </label>
      {data.labels[1] && <span className={styles.price}>{data.labels[1]}</span>}
    </div>
  );
};
