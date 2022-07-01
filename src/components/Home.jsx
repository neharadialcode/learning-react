import React from "react";
import { useState } from "react";
import natureJpg from "../img/nature.jpg";

const Home = () => {
  const [upload, setUpload] = useState("");
  const uploadHandler = (e) => {
    let uploadImg = URL.createObjectURL(e.target.files[0]);
    console.log(" uploadImg", uploadImg);
    setUpload(uploadImg);
  };
  return (
    <div className="home">
      <label htmlFor="upload-image">
        <img
          className="upload_img"
          src={upload ? upload : natureJpg}
          alt="natureJpg"
        />
      </label>
      <input
        id="upload-image"
        onChange={(e) => uploadHandler(e)}
        type="file"
        hidden
        accept="png/*"
      />
    </div>
  );
};

export default Home;
