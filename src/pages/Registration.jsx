import { ErrorMessage, Field, Form, Formik } from "formik";
import { basicSchema } from "../schemas";

const Registration = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      console.log(values);
      actions.setSubmitting(false);
      actions.resetForm();
    }, 1000);
  };

  return (
    <div>
      <Formik
        initialValues={{ username: "" }}
        validationSchema={basicSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="username" name="username" />
            <ErrorMessage name="username" component={"div"} />
            <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gray-500  text-white p-2 rounded disabled:opacity-50`}
        >
          Signup
        </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
