import React from "react";
import useHandleCHange from "../../hook/useHandleChange";

const Form2 = () => {
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
  // };
  const { values, handleChange } = useHandleCHange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border bg-slate-500 rounded-lg"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border bg-slate-500 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input type="checkbox" name="hobby" onChange={handleChange} />
      </div>

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

export default Form2;
