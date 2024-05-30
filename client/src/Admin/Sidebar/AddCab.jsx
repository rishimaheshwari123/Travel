import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddCab() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    vName: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("vName", formData.vName);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("image", formData.image);

    try {
      const res = await axios.post(
        "http://localhost:8080/admin/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        title: `Your car is added successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });
      setFormData({
        title: "",
        desc: "",
        vName: "",
        image: null,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Add Cars</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="price">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Vehchical Name:</label>
          <input
            type="text"
            name="vName"
            placeholder="Enter Vehchival Name"
            value={formData.vName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Descrition:</label>
          <input
            type="text"
            name="desc"
            placeholder="Enter Description"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button className="btn-grad" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCab;
