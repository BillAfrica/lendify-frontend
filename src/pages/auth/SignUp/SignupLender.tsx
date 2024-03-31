import AuthLayout from "../../../components/base/layout/AuthLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import ProgressBar from "../../../components/block/progress/ProgressBar";

export default function SignUpLender() {
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <div className="w-full flex justify-between items-center">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
              >
                Get Started
              </p>
              <ProgressBar value={100} text={"3/3"} />
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
              >
                {" "}
                Login here
              </a>
            </p>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-500">
                OR
              </p>
              <hr className="w-full bg-gray-400" />
            </div>

            <form onSubmit={handleSubmit}>
              <PrimaryInputField
                label="Email"
                placeholder="*****@gmail.com"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                type="email"
                name="email"
              />

              <PrimaryInputField
                label="Password"
                placeholder="*********"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={errors.password}
                type="text"
                name="password"
              />

              <PrimaryInputField
                label="Confirm Password"
                placeholder="*********"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                error={errors.confirmPassword}
                type="text"
                name="confirmPassword"
              />

              <PrimaryButton
                label="PROCEED"
                onClick={handleSubmit}
                type="submit"
              />
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}
