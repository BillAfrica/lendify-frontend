import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/block/button/PrimaryButton";
import OTPInputField from "../../components/block/inputs/OTPInputField";

export default function SetPin() {
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
          otp: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .required("OTP is required")
            .min(4, "OTP must be 4 digits")
            .max(4, "OTP must be 4 digits"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          setValues,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Set Transaction Pin
            </p>

            <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
              Set a 4-digit pin to authenticate and authorize transactions on
              your account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="my-10">
                <OTPInputField
                  value={values.otp}
                  onChange={(otp: any) => {
                    setValues({ ...values, otp: otp });
                  }}
                  numInputs={4}
                  error={errors.otp}
                />
              </div>

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
