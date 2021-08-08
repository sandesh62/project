import React from "react";
import * as Icon from "react-bootstrap-icons";
import colors from "../config/colors";

const renderFilterOptions = (props) => {
  const { title, options } = props;
  return (
    <div style={{ padding: "5px" }}>
      {renderSearchBar(title)}
      {options.map((item, index) => {
        return (
          <div key={index} style={{ marginTop: "10px" }}>
            {renderSearchOptions(item)}
          </div>
        );
      })}
    </div>
  );
};

const renderSearchBar = (title) => {
  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${colors.GRAY}`,
        padding: "10px",
      }}
    >
      <Icon.Search size={13} />
      <input
        type="text"
        placeholder={title}
        style={{ border: 0, marginLeft: 10, fontSize: "13px" }}
      />
    </div>
  );
};

const renderSearchOptions = (optionName) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: colors.LIGHT_BLUE,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: '50px'
      }}
    >
      <p style={{ fontSize: "13px", color: colors.BLUE,  }}>
        {optionName}
      </p>
      <Icon.XLg size={10} color={colors.BLUE} style={{marginBottom: 10}}/>
    </div>
  );
};

export default function FilterComponent(props) {
  const { title, activeFilter } = props;
  const renderFilterButton = () => {
    return (
      <button
        onClick={() => props.toggleFilterState(title)}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "transparent",
          border: 0,
        }}
      >
        <p style={{ fontSize: "13px" }}>{title}</p>
        <Icon.ChevronDown size={13} />
      </button>
    );
  };
  return (
    <div style={{ padding: "10px", width: "100%" }}>
      {renderFilterButton()}
      {activeFilter === title && renderFilterOptions(props)}
    </div>
  );
}
