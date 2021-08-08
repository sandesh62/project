import React from "react";
import DetailsComponent from "../components/DetailsComponent";
import { mockDataList } from "../config/MockData";

export default function DetailsContainer() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      {mockDataList.map((item, index) => {
        return (
          <div key={index} style={{ marginRight: "30px" }}>
            <DetailsComponent {...item} />
          </div>
        );
      })}
    </div>
  );
}
