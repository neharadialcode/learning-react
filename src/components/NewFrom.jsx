import React, { useState } from "react";

const NewFrom = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    rollNo: "",
  });

  const [error, setError] = useState(false);
  const onSumbitHandler = (e) => {
    e.preventDefault();
    setError(true);
    console.log(value, "saveValue");
  };
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="w-100">
      <div className="container w-100 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form action="">
              <div className="py-2">
                <input
                  value={value.name}
                  onChange={(e) =>
                    setValue(() => ({
                      ...value,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                  className="w-100"
                  name="property"
                  id=""
                  placeholder="name"
                />
                <p className="text-danger mb-0">
                  {error && value.name === "" ? "name is requried" : ""}
                </p>
              </div>
              <div className="py-2">
                <input
                  onChange={(e) =>
                    setValue(() => ({
                      ...value,
                      rollNo: e.target.value,
                    }))
                  }
                  value={value.rollNo}
                  type="number"
                  className="w-100"
                  name=""
                  id=""
                  placeholder="roll no"
                />
                <p className="text-danger mb-0">
                  {error && value.rollNo === "" ? "roll no is requried" : ""}
                </p>
              </div>
              <div className="py-2">
                <input
                  onChange={(e) =>
                    setValue(() => ({
                      ...value,
                      email: e.target.value,
                    }))
                  }
                  value={value.email}
                  type="email"
                  className="w-100"
                  name=""
                  id=""
                  placeholder="email"
                />
                <p className="text-danger mb-0">
                  {error && value.email === ""
                    ? "email is requried"
                    : error && regex.test(value.email) === false
                    ? "email not valid"
                    : ""}
                </p>
              </div>
              <div className="text-center mt-3">
                <button
                  //   disabled={
                  //     value.email === "" &&
                  //     value.rollNo === "" &&
                  //     value.name === ""
                  //       ? true
                  //       : false
                  //   }
                  type="submit"
                  onClick={(e) => onSumbitHandler(e)}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFrom;
