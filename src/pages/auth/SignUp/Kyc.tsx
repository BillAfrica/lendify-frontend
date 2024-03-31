import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import { appName } from "../../../utils/constants";
import ScreenHeader from "../../../components/base/header/ScreenHeader";
import { FaUserCircle } from "react-icons/fa";

function Kyc() {
  return (
    <section className="bg-primaryBg min-h-screen min-w-screen">
      <div className="2xl:mx-auto 2xl:container md:flex items-center justify-center">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            alternateEmail: "string",
            phone: "string",
            alternatePhone: "string",
            address: "string",
            city: "string",
            state: "string",
            maritalStatus: "string",
            profileImage: {},
            profileImagePublicId: "string",
            nationality: "string",
            lgaOfOrigin: "string",
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div className=" bg-white rounded-xl shadow-xl ">
              <ScreenHeader>
                <div className="flex rounded-full bg-white p-2 justify-center items-center absolute bottom-[-30px] left-[44%]">
                  <FaUserCircle className="h-16 w-16 rounded-full text-secondary " />
                </div>
              </ScreenHeader>
              <div className="flex  mt-8 flex-col justify-between items-center w-full md:w-[700px] rounded-xl">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                >
                  KYC (Know Your Customer)
                </p>
              </div>
              <p
                tabIndex={0}
                className="focus:outline-none text-center text-sm mt-4 font-medium leading-none text-gray-500"
              >
                Complete your KYC to enjoy and unlock exclusive features on{" "}
                {appName}
              </p>
              <div className="w-full flex items-center justify-between py-5">
                <hr className="w-full bg-gray-400" />
                <hr className="w-full bg-gray-400" />
              </div>

              <div className="p-3 md:p-10">
                <div className=" grid grid-cols-2 gap-5">
                  <PrimaryInputField
                    label="First Name"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={errors.firstName}
                    placeholder={""}
                  />
                  <PrimaryInputField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={errors.lastName}
                    placeholder={""}
                  />
                </div>

                <div className=" grid grid-cols-2 gap-5">
                  <PrimaryInputField
                    label="Phone Number"
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    error={errors.phone}
                    placeholder={""}
                  />
                  <PrimaryInputField
                    label="Alternate Phone Number"
                    type="text"
                    name="alternatePhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alternatePhone}
                    error={errors.alternatePhone}
                    placeholder={""}
                  />
                </div>

                <div className=" grid grid-cols-2 gap-5">
                  <PrimaryInputField
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                    placeholder={""}
                  />
                  <PrimaryInputField
                    label="Alternate Email"
                    type="email"
                    name="alternateEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alternateEmail}
                    error={errors.alternateEmail}
                    placeholder={""}
                  />
                </div>
                <div className=" grid grid-cols-2 gap-5">
                  <PrimaryInputField
                    label="Address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    error={errors.address}
                    placeholder={""}
                  />
                  <PrimaryInputField
                    label="City"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    error={errors.city}
                    placeholder={""}
                  />
                </div>

                <div className=" grid grid-cols-2 gap-5">
                  <PrimaryInputField
                    label="State"
                    type="text"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                    error={errors.state}
                    placeholder={""}
                  />
                  <PrimaryInputField
                    label="Marital Status"
                    type="text"
                    name="maritalStatus"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.maritalStatus}
                    error={errors.maritalStatus}
                    placeholder={""}
                  />
                </div>

                <div className=" grid grid-cols-2 gap-5"></div>

                <div className="w-full flex justify-end items-center">
                  <div className="w-3/4"></div>
                  <div className="flex justify-end items-center space-x-5 w-2/4 md:w-1/4">
                    <button>
                      <p className="text-sm mt-4 leading-none text-secondary font-bold ">
                        Skip
                      </p>
                    </button>

                    <PrimaryButton
                      label="PROCEED"
                      onClick={handleSubmit}
                      type={undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Kyc;
