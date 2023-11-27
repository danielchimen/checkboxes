import type { Props } from "./types";
import { Checkbox } from "./Checkbox";
import styles from "./Checkbox.module.css";

export const Checkboxes = (params: Props) => {
  const { data, onChange } = params;

  return (
    <div className={styles.checkboxes}>
      {data.map((checkbox) => (
        <Checkbox
          key={checkbox.value}
          data={checkbox}
          onChange={(e) => onChange(e)}
        />
      ))}
    </div>
  );
};

export type { Props };
