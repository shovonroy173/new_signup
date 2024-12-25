import * as yup from "yup";
export const basicSchema = yup.object().shape({
    username: yup.string().required("Required"),
})