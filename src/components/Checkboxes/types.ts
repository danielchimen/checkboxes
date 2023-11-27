import type { ChangeEvent } from "react";

export type Checkbox = {
  value: string;
  labels: string[];
  checked?: boolean;
};

export type Props = {
  data: Checkbox[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
