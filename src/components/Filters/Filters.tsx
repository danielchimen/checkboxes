import { type ChangeEvent, useState } from "react";
import type { Filters as FiltersType } from "./types";
import { Checkboxes } from "../Checkboxes";

export const Filters = () => {
  const [filters, setFilters] = useState<FiltersType>({
    stops: [
      {
        value: "0",
        labels: ["Direct", "£00.00"],
        checked: false,
      },
      {
        value: "1",
        labels: ["Up to 1 Stop", "£00.00"],
        checked: false,
      },
      {
        value: "2",
        labels: ["Up to 2 Stops", "£00.00"],
        checked: false,
      },
    ],
  });

  const handleStopsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFilters({
      ...filters,
      stops: filters.stops.map((item) => {
        if (value === "0") {
          if (!checked && Number(item.value) > 0 && item.checked) {
            console.log(
              " 1 stop or more selected and direct is clicked, so uncheck all."
            );
            return {
              ...item,
              checked: false,
            };
          }
        }

        if (value === "1") {
          if (checked && Number(item.value) === 0 && !item.checked) {
            console.log(
              "1 stop selected and direct is not checked, so check it."
            );
            return {
              ...item,
              checked: true,
            };
          }

          if (checked && Number(item.value) === 2 && item.checked) {
            console.log("if direct and 2 stops are checked, uncheck 2 stops.");
            return {
              ...item,
              checked: false,
            };
          }

          if (!checked && Number(item.value) === 2 && item.checked) {
            console.log('set remainChecked to "true"');
            return {
              ...item,
              checked: false,
            };
          }
        }

        if (value === "2") {
          if (checked && Number(item.value) < 2 && !item.checked) {
            console.log(
              "2 stops selected and previous checkboxes are unchecked, so check them."
            );
            return {
              ...item,
              checked: true,
            };
          }
        }

        if (item.value === value) {
          return {
            ...item,
            checked,
          };
        }
        return item;
      }),
    });
  };

  return (
    <div>
      <h1>Filters</h1>
      <Checkboxes data={filters.stops} onChange={(e) => handleStopsChange(e)} />
    </div>
  );
};
