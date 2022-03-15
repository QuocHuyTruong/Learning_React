import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values, action) => {
        console.log(values);

        setTimeout(() => {
          action.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          action.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            <MyInput
              label="FirstName"
              name="firstName"
              placeholder="Enter your first name"
              id="fisrtName"
            ></MyInput>
            <MyInput
              label="LastName"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              id="email"
              type="email"
            ></MyInput>
            <MyTextarea
              label="Intro"
              name="intro"
              placeholder="Enter introduce"
              id="intro"
            ></MyTextarea>
            <MySelectBox name="job" label="job">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </MySelectBox>
            <MyCheckbox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckbox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-500 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-4 rounded-md border border-gray-500"
          {...field}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SignUpFormFinal;
