import React, { useState } from "react";

const List = () => {
  const deleteHandler = (index) => {
    const duplicateArray = [...dataArray];
    const newArray = duplicateArray.filter((value, i) => i !== index);
    setDataArray(newArray);
    console.log(newArray, "newArray");
  };
  const [dataArray, setDataArray] = useState([]);
  return (
    <div className="vh-100 w-100 bg-pink ">
      {dataArray.length > 0 &&
        dataArray.map((item, index) => (
          <>
            <div className="row mx-0 justify-content-center">
              <div className="col-lg-8">
                <ul className="d-flex list-unstyled ">
                  <li className="w-100 custom_bg one">{item.name}</li>
                  <li className="w-100 custom_bg twoo">{item.email}</li>
                  <li className="w-100 custom_bg three">{item.userName}</li>
                  <li className="w-100 custom_bg four">{item.password}</li>
                  <li className="w-100 custom_bg five">{item.confPassword}</li>
                </ul>
              </div>
              <div className="col-2 ">
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default List;
