import React, { useEffect } from "react";
import { useState } from "react";
import natureJpg from "../img/nature.jpg";

const Home = ({ history }) => {
  const isSignUpValue = localStorage.getItem("isSignup");
  const [upload, setUpload] = useState("");
  const [multiple, setmultiple] = useState();
  const uploadHandler = (e) => {
    // let uploadImg = e.target.files[0];
    let Images = [];
    for (let index = 0; index < e.target.files.length; index++) {
      Images.push(URL.createObjectURL(e.target.files[index]));
    }
    setmultiple(Images);
    console.log("sdfghj", multiple);

    // let file = [i];
    // uploadImg.push((i = 0 < file[0]), i++);
    // console.log(uploadImg, "uploadImg");
    // let uploadImg = URL.createObjectURL(e.target.files[0]);
    // console.log(" uploadImg", uploadImg);
    // setUpload(uploadImg);
  };
  const logOutHandler = () => {
    localStorage.setItem("isSignup", false);
    history.push("/sign-up");
    window.location.reload();
  };

  // useEffect(() => {
  //   // console.log("bbbbbbbbb====", isSignUpValue);

  //   if (isSignUpValue === "false" && isSignUpValue === "null") {
  //     // console.log("aaaaaaaaaaaaaaa====", isSignUpValue);
  //     history.push("/sign-up");
  //   }
  // }, [isSignUpValue]);

  return (
    <div className="home">
      {multiple && multiple.length > 0 ? (
        ""
      ) : (
        <label htmlFor="upload-image">
          <img
            className="upload_img"
            src={upload ? upload : natureJpg}
            alt="natureJpg"
          />
        </label>
      )}

      <input
        id="upload-image"
        onChange={(e) => uploadHandler(e)}
        type="file"
        hidden
        multiple
        accept="png/*"
      />
      <div className="d-flex flex-wrap w-100">
        {multiple &&
          multiple.map((obj, index) => (
            <img
              key={index}
              className="w-25 mw-500"
              src={obj}
              alt="natureJpg"
            />
          ))}
      </div>
      <div>
        <button
          onClick={() => logOutHandler()}
          className="logout_btn"
          type="button"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Home;
