import React, { useState } from "react";
import FilterComponent from "../components/FilterComponent";
import colors from "../config/colors";
import { filterList, mockDataList } from "../config/MockData";

export default function FiltersContainer() {
  const [activeFilter, setActiveFilter] = useState(filterList[0].title);

  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${colors.GRAY}`,
        margin: "10px 20px",
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>Filters</p>
        <p
          style={{
            fontSize: "12px",
            color: colors.BLUE,
            textDecoration: "underline",
          }}
        >
          Clear
        </p>
      </div>
      {filterList.map((item, index) => {
        return (
          <div key={index}>
            <FilterComponent
              {...item}
              toggleFilterState={(title) => setActiveFilter(title)}
              activeFilter={activeFilter}
            />
          </div>
        );
      })}
    </div>
  );
}
