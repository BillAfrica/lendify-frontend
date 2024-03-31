import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import { appName } from "../../../utils/constants";
import ScreenHeader from "../../../components/base/header/ScreenHeader";
import { FaUserCircle } from "react-icons/fa";

function ProfileDetails() {
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
                  {/* <img
                    className="h-16 w-16 rounded-full "
                    src="data:image/jpeg;base64,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"
                  /> */}
                  <FaUserCircle className="h-16 w-16 rounded-full text-secondary " />
                </div>
              </ScreenHeader>
              <div className="flex  mt-10 flex-col justify-between items-center w-full md:w-[700px] rounded-xl">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                >
                  Update Profile
                </p>
              </div>
              <p
                tabIndex={0}
                className="focus:outline-none text-center text-sm mt-4 font-medium leading-none text-gray-500"
              >
                Update and complete your profile setup on {appName}
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

export default ProfileDetails;
