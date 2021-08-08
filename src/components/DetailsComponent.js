import React from "react";
import colors from "../config/colors";
import * as Icon from "react-bootstrap-icons";
import ReactCountryFlag from "react-country-flag";
import { chunkifyData } from "../utils/DataChunk";

const renderImageSection = () => {
  return (
    <div
      style={{
        width: "15%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          border: `1px solid ${colors.GRAY}`,
          height: "100px",
          width: "100px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <p style={{ fontSize: "10px" }}>Image</p>
      </div>
    </div>
  );
};

const renderDetailsSection = (props) => {
  return (
    <div
      style={{
        width: "85%",
        paddingTop: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "25px",
        }}
      >
        {renderTitle(props)}
        {renderPlusIcon()}
      </div>
      {renderSubtitle(props)}
      {renderDescriptionList(props)}
      {renderAddress(props)}
      {renderContactDetails(props)}
    </div>
  );
};

const renderTitle = (props) => {
  const { isAd, title, isVerified } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {isAd && (
        <p
          style={{
            fontSize: "15px",
            color: colors.GREEN,
            paddingRight: "10px",
          }}
        >
          Ad
        </p>
      )}
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          paddingRight: "10px",
        }}
      >
        {title}
      </p>
      {isVerified && (
        <Icon.PatchCheckFill color={colors.BLUE} style={{ marginTop: "3px" }} />
      )}
    </div>
  );
};

const renderPlusIcon = () => {
  return (
    <div
      style={{
        backgroundColor: colors.BLUE,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30,
        height: "20px",
        width: "20px",
      }}
    >
      <p style={{ fontSize: "15px", color: colors.WHITE, paddingTop: "12px" }}>
        +
      </p>
    </div>
  );
};

const renderSubtitle = (props) => {
  const { subTitle, countryCode } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: "15px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          paddingRight: "10px",
          color: colors.GRAY,
        }}
      >
        {subTitle}
      </p>
      <ReactCountryFlag
        countryCode={countryCode}
        style={{
          fontSize: "1em",
        }}
      />
      <p
        style={{
          fontSize: "12px",
          marginLeft: "10px",
          color: colors.GRAY,
        }}
      >
        {countryCode}
      </p>
    </div>
  );
};

const renderDescriptionList = (props) => {
  const { descriptionList } = props;
  if (descriptionList.length > 3) {
    const displayList = chunkifyData(descriptionList, 3);
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        {displayList.map((chunkifiedList, index) => (
          <div key={index} style={{ flexDirection: "row" }}>
            {chunkifiedList.map((item, chunkIndex) => (
              <div key={chunkIndex}>
                <p
                  style={{
                    fontSize: "12px",
                    marginRight: "20px",
                  }}
                >
                  • {item}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "20px",
      }}
    >
      {descriptionList.map((item, chunkIndex) => (
        <div key={chunkIndex}>
          <p
            style={{
              fontSize: "12px",
              marginRight: "20px",
            }}
          >
            • {item}
          </p>
        </div>
      ))}
    </div>
  );
};

const renderAddress = (props) => {
  const { addressLine, city, pin } = props.address;
  const address = `${addressLine}, ${city} - ${pin}.`;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
      }}
    >
      <Icon.MapFill color={colors.BLUE} />
      <p
        style={{
          fontSize: "12px",
          marginLeft: "10px",
        }}
      >
        {address}
      </p>
    </div>
  );
};

const renderContactDetails = (props) => {
  const { year, phone, timing } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon.Search color={colors.BLUE} />
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          Founding Year: {year}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon.Telephone color={colors.BLUE} />
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          {phone}
        </p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginRight: "50px" }}
      >
        <Icon.Clock color={colors.BLUE} />
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          {timing}
        </p>
      </div>
    </div>
  );
};

const renderMiscData = (props) => {
  let { order, team, responseRate } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "15px",
        marginLeft: "15px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          Min Order:
        </p>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {order}
        </p>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          Team:
        </p>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {team}
        </p>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
          }}
        >
          Response Rate:
        </p>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {responseRate}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
      <Icon.ClipboardCheck color={colors.BLUE} />
        <p
          style={{
            fontSize: "12px",
            marginLeft: "5px",
            fontWeight: "bold",
            marginRight: "50px",
          }}
        >
          Compare
        </p>
      </div>
    </div>
  );
};
export default function DetailsComponent(props) {
  return (
    <div
      style={{
        display: "flex",
        border: `1px solid ${colors.GRAY}`,
        marginTop: "10px",
        width: "70%",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
        {renderImageSection()}
        {renderDetailsSection(props)}
      </div>
      <div style={{ height: "1px", backgroundColor: colors.GRAY }} />
      {renderMiscData(props)}
    </div>
  );
}