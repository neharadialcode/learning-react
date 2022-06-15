import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router";

const ButtonTabs = ({ match }) => {
  const { id } = match.params;
  const buttonArray = [
    { one: "one" },
    { one: "two" },
    { one: "three" },
    { one: "four" },
    { one: "five" },
  ];
  const history = useHistory();

  return (
    <div className="m-5 p-5">
      {buttonArray.map((obj, index) => (
        <button
          onClick={() => history.push(`/new/${index}`)}
          className={` m-2 ${Number(id) === index ? "btn-red" : "btn-dark"}`}
        >
          {obj.one}
          {console.log(history)}
        </button>
      ))}
    </div>
  );
};

export default withRouter(ButtonTabs);
