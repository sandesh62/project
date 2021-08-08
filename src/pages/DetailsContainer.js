import React from "react";
import DetailsComponent from "../components/DetailsComponent";
import ReviewsComponent from "../components/ReviewsComponent";
import { mockDataList } from "../config/MockData";

export default function DetailsContainer() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll", width: '100%' }}>
      {mockDataList.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <DetailsComponent {...item} />
            <ReviewsComponent {...item} />
          </div>
        );
      })}
    </div>
  );
}
