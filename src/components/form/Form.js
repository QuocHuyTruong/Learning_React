import React, { useState } from "react";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };
  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChanger = (e) => {
  //   setMessage(e.target.value);
  // };
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
    // if (type === "checkbox") {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };

  console.log(values);
  return (
    <div className="p-5 bg-purple-400">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-slate-500 rounded-lg"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-slate-500 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleInputChange} /> */}
        <button type="submit" className="p-3 rounded-lg bg-blue-500 text-white">
          Submit
        </button>
      </form>

      {/* {message}
      <textarea
        name="message"
        placeholder="Enter your message"
        className="w-full max-w-[300px] p-3 border bg-slate-500 rounded-lg"
        onChange={handleTextareaChanger}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
