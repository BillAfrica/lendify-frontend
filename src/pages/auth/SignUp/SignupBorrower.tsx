import { useState } from "react";
import AuthLayout from "../../../components/base/layout/AuthLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import ProgressBar from "../../../components/block/progress/ProgressBar";
import PasswordInputField from "../../../components/block/inputs/PasswordInputField";

export default function SignupBorrower() {
  return (
    <>
      <Formik
        initialValues={{
          bvn: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          bvn: Yup.string()
            .min(11, "BVN must be 11 characters")
            .required("BVN is required"),
          password: Yup.string().required("Password is required"),
          confirmPassword: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <div className="flex justify-between items-center">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
              >
                Get Started
              </p>

              <ProgressBar text="2/3" value={66.6} />
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
                label="BVN (Bank Verification Number)"
                placeholder="22*********"
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

              <PasswordInputField
                label="Password"
                placeholder="**********"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={errors.password}
                name="password"
              />

              <PasswordInputField
                label="Confirm Password"
                placeholder="**********"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                error={errors.confirmPassword}
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
