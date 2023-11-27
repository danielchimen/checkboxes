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

    const updatedStops = filters.stops.map((item) => {
      if (value === "0" && !checked) {
        if (Number(item.value) > 0 && item.checked) {
          // Up to 1 Stop or more are selected and Direct is clicked, so uncheck all.
          return {
            ...item,
            checked: false,
          };
        }
      }

      if (value === "1") {
        if (checked) {
          if (Number(item.value) === 0 && !item.checked) {
            // Up to 1 Stop is checked and Direct is not checked, so check Direct.
            return {
              ...item,
              checked: true,
            };
          }
        } else {
          if (Number(item.value) === 2 && item.checked) {
            // Up to 2 Stops is checked and Up to 1 Stop is unchecked, so uncheck Up to 2 Stops.
            return {
              ...item,
              checked: false,
            };
          }
        }
      }

      if (value === "2" && checked) {
        if (Number(item.value) < 2 && !item.checked) {
          // Up to 2 Stops selected and previous checkboxes are unchecked, so check them.
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
    });

    setFilters({
      ...filters,
      stops: updatedStops,
    });
  };

  return (
    <div>
      <h1>Filters</h1>
      <Checkboxes data={filters.stops} onChange={(e) => handleStopsChange(e)} />
    </div>
  );
};
