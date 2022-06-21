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
    <div className="">
      {buttonArray.map((obj, index) => (
        <div>
          <button
            onClick={() => history.push(`/new/${index}`)}
            className={` m-2 ${
              Number(id) === index ? "btn_new_active" : "btn_new"
            }`}
          >
            {obj.one}
            {console.log(history)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default withRouter(ButtonTabs);
