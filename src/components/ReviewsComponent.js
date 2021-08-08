import React from "react";
import colors from "../config/colors";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";

const renderReviewStars = (props) => {
  const { reviewRating } = props;
  return (
    <ReactStars
      count={5}
      value={reviewRating}
      edit={false}
      size={30}
      isHalf={true}
      activeColor={colors.GREEN}
    />
  );
};

const renderReviewNumber = (props) => {
  const { reviewTotal } = props;
  return (
    <p
      style={{
        fontSize: "15px",
        fontWeight: "bold",
        color: colors.BLUE,
        marginTop: "20px",
      }}
    >
      {reviewTotal}
    </p>
  );
};

const renderWriteReviewButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 20,
        border: `1px solid ${colors.GRAY}`,
        padding: `0px 20px`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon.PencilSquare />

      <p
        style={{
          fontSize: "12px",
          paddingTop: "15px",
          paddingLeft: "10px",
        }}
      >
        Write Review
      </p>
    </div>
  );
};

const renderMiscOptions = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "30px",
      }}
    >
      <div>
        <Icon.ChatFill color={colors.BLUE} size={40} />
        <p
          style={{
            fontSize: "15px",
            paddingTop: "10px",
          }}
        >
          Chat
        </p>
      </div>
      <div style={{ width: "60px" }} />
      <div>
        <Icon.ChatLeftFill color={colors.GRAY} size={40} />
        <p
          style={{
            fontSize: "15px",
            paddingTop: "10px",
          }}
        >
          Enquiry
        </p>
      </div>
    </div>
  );
};
export default function ReviewsComponent(props) {
  return (
    <div
      style={{
        display: "flex",
        border: `1px solid ${colors.GRAY}`,
        borderLeft: 0,
        marginTop: "10px",
        width: "28%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderReviewStars(props)}
      {renderReviewNumber(props)}
      {renderWriteReviewButton()}
      {renderMiscOptions()}
    </div>
  );
}
