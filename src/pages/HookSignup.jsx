import { useForm } from "react-hook-form";
import Input from "../component/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const HookSignup = () => {
  const validationSchema = yup.object().shape({
    firstname: yup.string().required("firstname required"),
    lastname: yup
      .string()
      .required("lastname required")
      .min(5, "lastname must be at least 5 characters"),
    email: yup
      .string()
      .email("email must be a valid email")
      .required("email required"),
    password: yup
      .string()
      .required("password required")
      .min(8, "password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  };

  const formData = [
    { id: "firstname", type: "text", name: "firstname" },
    { id: "lastname", type: "text", name: "lastname" },
    { id: "email", type: "email", name: "email" },
    { id: "password", type: "password", name: "password" },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center h-screen gap-5"
      >
        {/* <label>Username:</label>

        <input
          type="text"
          {...register("username", { required: "username required" })}
          className="border border-gray-500"
        />
        <Input
          type="text"
          name="lastname"
          register={register}
          validationSchema={{
            required: "lastname required",
            minLength: {
              value: 5,
              message: "lastname must be at least 5 characters",
            },
          }}
          errors={errors}
        />
        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
          className="border border-gray-500"
        />
        <label>Password:</label>
        <input
          type="password"
          {...register("password")}
          className="border border-gray-500"
        /> */}
        {formData.map((data) => (
          <div key={data.id}>
            <Input
              type={data.type}
              name={data.name}
              register={register}
              validationSchema={data.validationSchema}
              errors={errors}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`bg-gray-800  text-white p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default HookSignup;
