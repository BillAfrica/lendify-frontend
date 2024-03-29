import { useState } from "react";
import AuthLayout from "../../components/base/layout/AuthLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/block/button/PrimaryButton";
import PasswordInputField from "../../components/block/inputs/PasswordInputField";
import OTPInputField from "../../components/block/inputs/OTPInputField";

export default function ResetPassword() {
  return (
    <>
      <AuthLayout>
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
            otp: "",
          }}
          validationSchema={Yup.object({
            newPassword: Yup.string().required("New password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
              .required("Confirm password is required"),
            otp: Yup.string().required("OTP is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            setValues,
            handleSubmit,
          }) => (
            <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-5 py-6">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 "
              >
                Reset Password
              </p>

              <p
                tabIndex={0}
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 mb-10"
              >
                Enter the OTP code sent to your email and your new password
              </p>

              <form onSubmit={handleSubmit}>
                <div className="my-5">
                  <OTPInputField
                    value={values.otp}
                    onChange={(otp: any) => {
                      setValues({ ...values, otp: otp });
                    }}
                    numInputs={4}
                  />
                </div>

                <PasswordInputField
                  label="New Password"
                  placeholder="**********"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newPassword}
                  error={errors.newPassword}
                  name="newPassword"
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
