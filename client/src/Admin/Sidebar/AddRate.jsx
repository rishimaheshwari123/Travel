import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddRate = () => {
  const [formData, setFormData] = useState({
    car: "",
    seat: "",
    rate: "",
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
    formDataToSend.append("car", formData.car);
    formDataToSend.append("seat", formData.seat);
    formDataToSend.append("rate", formData.rate);

    try {
      const res = await axios.post(
        "http://localhost:8080/admin/rate",
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
        car: "",
        seat: "",
        rate: "",
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
          <label htmlFor="price">Car:</label>
          <input
            type="text"
            name="car"
            placeholder="Enter Title"
            value={formData.car}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Seats:</label>
          <input
            type="text"
            name="seat"
            placeholder="Enter Vehchival Name"
            value={formData.seat}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Rate:</label>
          <input
            type="text"
            name="rate"
            placeholder="Enter Description"
            value={formData.rate}
            onChange={handleChange}
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
};

export default AddRate;
