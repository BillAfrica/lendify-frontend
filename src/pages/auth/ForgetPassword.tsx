import { useState } from "react";
import AuthLayout from "../../components/base/layout/AuthLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../components/block/button/PrimaryButton";

export default function ForgetPassword() {
  return (
    <>
      <AuthLayout>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-5 py-6">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 "
              >
                Forget Password
              </p>

              <p
                tabIndex={0}
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 mb-10"
              >
                Enter your email address to reset your password
              </p>

              <form onSubmit={handleSubmit}>
                <PrimaryInputField
                  label="Enter your email address"
                  placeholder="example@gmail.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                  type="email"
                  name="email"
                />

                <PrimaryButton
                  label="Continue"
                  onClick={handleSubmit}
                  type="submit"
                />
              </form>
            </div>
          )}
        </Formik>
      </AuthLayout>
    </>
  );
}
