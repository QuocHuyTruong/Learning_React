import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import axios from "axios";
// use react-hook-form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Flease enter your first name")
    .max(10, "Must be 10 character or less"),
  // lastName: Yup.string().required("Flease enter your last name").max(10),
});
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setFocus,
    control,
    resetField,
    formState: { errors, isSubmitting, isValid, dirtyFields, isDirty },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  // console.log(isSubmitting);
  const onSubmit = async (values) => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query='react'"
    // );
    // return response.data;
    console.log("Sent to backend", values);
    // reset({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // });
    // resetField("firstName");
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleClickData = () => {
    setValue("firstName", "ahihsasi");
    setValue("lastName", "ahihi");
    setValue("email", "minhhuytruong10@gmail.com");
  };
  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-500"
          // {...register("firtsName", {
          //   required: true,
          //   maxLength: 10,
          // })}
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors.firtsName && errors.firtsName.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-500"
          {...register("lastName")}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-500"
          {...register("email")}
        /> */}
        <MyInput name="email" id="email" control={control}></MyInput>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && <input type="number" placeholder="Enter your age" />}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          type="text"
          className="p-3 bg-green-400 text-white"
          onClick={handleClickData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           className="p-4 rounded-md border border-gray-500"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      className="p-4 rounded-md border border-gray-500"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
