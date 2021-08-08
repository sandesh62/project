import React from "react";
import DetailsContainer from "./DetailsContainer";
import FiltersContainer from "./FiltersContainer";

export default function RootContainer() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        height: "100vh",
        flex: 1,
      }}
    >
      <div style={{ display: "flex", width: "20%", height: "100vh" }}>
        <FiltersContainer />
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
        }}
      >
        <DetailsContainer />
      </div>
    </div>
  );
}
