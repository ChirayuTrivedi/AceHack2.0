import React, { useState } from "react";
// import * as React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./AddDog.css";

const AddDog = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [breed, setBreed] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [age, setAge] = useState(state?.mrp || "");
  const [price, setPrice] = useState(state?.price || "");
  const [college_name, setCollege_name] = useState(state?.college_name || "SKIT");
  const [course, setCourse] = useState(state?.course || "");
  const [branch, setBranch] = useState(state?.branch || "Computer Science Engineering");
  const [sem, setSem] = useState(state?.sem || "");
  const [edition, setEdition] = useState(state?.edition || "2022");

  // console.log(state.id + " state")

  var currentUser= JSON.parse(localStorage.getItem("user")).id;
  console.log(currentUser.username)

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res.data)
      return res.data;
      
    } catch (err) {
      console.log(err);
      // console.log("udcs")
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    console.log(file + "  imgurl")

    const obj = {
        breed,
        desc:value,
        img: file ? imgUrl : "",
        age,
       uid : currentUser,

    }
    console.log(obj)

    

    try {
      await axios.post(`/dogs/`, obj);
      localStorage.setItem("dog", JSON.stringify(obj));

      navigate("/");
    console.log("everything is ok")
    } catch (err) {
      console.log(err);
    }
  };

  //Dropdown

  // const [edi, setEdi] = React.useState('2022');

//   const handleChangeEdition = (event) => {
//     setEdition(event.target.value);
//   };
//   const handleChangeBranch = (event) => {
//     setBranch(event.target.value);
//   };
//   const handleChangeColleges = (event) => {
//     setCollege_name(event.target.value);
//   };

  return (
    <div className="add">
      <div id="form">
        <button className="back">
          <a href="/">Back</a>
        </button>
        <div className="content">
          <input
            type="text"
            className="input"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              placeholder="Description"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <div className="menu">
          {/* Image */}
<div className="item">
          <input
            style={{ display: "none" }}
            type="file"
            className="input"
            id="file"
            name=""
            onChange={(e) => {setFile(e.target.files[0]);
            console.log(e.target.files[0]);}}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
        </div>

          <div className="item">
            <input
              type="number"
              className="input"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            
           
            <div className="buttons file">
              <button className="buttons" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDog;
