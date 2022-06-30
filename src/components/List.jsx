import React, { useState } from "react";

const List = () => {
  const [dataArray, setDataArray] = useState([]);
  return (
    <div className="vh-100 w-100 bg-pink">
      <div className="row">
        <div className="col-lg-6 max-h-400 overflow-auto">
          {dataArray.length > 0 &&
            dataArray.map((item) => (
              <ul>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.userName}</li>
                <li>{item.password}</li>
                <li>{item.confPassword}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
