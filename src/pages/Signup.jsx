import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const Signup = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      console.log(values);
      actions.setSubmitting(false);
      actions.resetForm();
    }, 1000);
  };
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col w-1/3 mx-auto mt-20 gap-3"
      >
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`border border-gray-700 ${
            errors.username && touched.username ? "border-red-500" : ""
          }`}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="border border-gray-700"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="border border-gray-700"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gray-500  text-white p-2 rounded disabled:opacity-50`}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
