import { useState } from "react";
import AuthLayout from "../../components/base/layout/AuthLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../components/block/button/PrimaryButton";

export default function SignupBorrower() {
  return (
    <>
      <AuthLayout>
        <Formik
          initialValues={{
            bvn: "",
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            bvn: Yup.string()
              .min(11, "BVN must be 11 characters")
              .required("BVN is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-5 py-6">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
              >
                Sign Up
              </p>
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
                  label="BVN (Bank Verification Number)"
                  placeholder="12345678901"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bvn}
                  error={errors.bvn}
                  type="text"
                  name="bvn"
                  maxLength={11}
                />

                <PrimaryInputField
                  label="Email"
                  placeholder="example@gmail.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                  type="email"
                  name="email"
                />

                <PrimaryButton
                  label="Create my account"
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
