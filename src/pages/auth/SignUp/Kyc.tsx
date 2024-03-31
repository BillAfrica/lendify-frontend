import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInputField from "../../../components/block/inputs/PrimaryInputField";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import { appName } from "../../../utils/constants";
import ScreenHeader from "../../../components/base/header/ScreenHeader";
import { FaUserCircle } from "react-icons/fa";
import FileUploadField from "../../../components/block/inputs/FileUploadField";

function Kyc() {
  return (
    <section className="bg-primaryBg min-h-screen min-w-screen pb-20">
      <div className="2xl:mx-auto 2xl:container md:flex items-center justify-center">
        <Formik
          initialValues={{
            employer: "",
            occupation: "",
            workEmail: "",
            workAddress: "",
            workCity: "",
            workState: "",
            annualIncome: 0,
            nextOfKinName: "",
            nextOfKinAddress: "",
            nextOfKinState: "",
            nextOfKinEmail: "",
            nextOfKinPhone: "",
            accountNumber: "",
            governmentId: {},
            utilityBill: {},
            passportPhotograph: {},
            bankStatement: {},
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
                <h2 className="text-primaryText text-xs font-bold ">
                  EMPLOYER / BUSINESS INFORMATION
                </h2>
                <hr className="w-full bg-gray-400 my-5" />

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="Employer Name"
                    type="text"
                    name="employer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.employer}
                    error={errors.employer}
                    placeholder="Enter your employer name"
                  />
                  <PrimaryInputField
                    label="Occupation"
                    type="text"
                    name="occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.occupation}
                    error={errors.occupation}
                    placeholder="e.g Engineer"
                  />
                </div>

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="Work Email Address"
                    type="text"
                    name="workEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.workEmail}
                    error={errors.workEmail}
                    placeholder="Enter your work email address name"
                  />
                  <PrimaryInputField
                    label="Address"
                    type="text"
                    name="occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.workAddress}
                    error={errors.workAddress}
                    placeholder=""
                  />
                </div>

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="City"
                    type="text"
                    name="workCity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.workCity}
                    error={errors.workCity}
                    placeholder=""
                  />
                  <PrimaryInputField
                    label="State"
                    type="text"
                    name="workState"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.workState}
                    error={errors.workState}
                    placeholder=""
                  />
                </div>

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="Annual Estimated Income"
                    type="text"
                    name="annualIncome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.annualIncome}
                    error={errors.annualIncome}
                    placeholder="N 100, 000.89"
                  />
                  <PrimaryInputField
                    label="Address"
                    type="text"
                    name="occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.workAddress}
                    error={errors.workAddress}
                    placeholder=""
                  />
                </div>
                <hr className="w-full bg-gray-400 my-5" />

                <h2 className="text-primaryText my-5 text-xs font-bold ">
                  NEXT OF KIN
                </h2>
                <hr className="w-full bg-gray-400 my-5" />

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="Name"
                    type="text"
                    name="nextOfKinName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKinName}
                    error={errors.nextOfKinName}
                    placeholder=""
                  />
                  <PrimaryInputField
                    label="Address"
                    type="text"
                    name="nextOfKinAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKinAddress}
                    error={errors.nextOfKinAddress}
                    placeholder=""
                  />
                </div>

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="State"
                    type="text"
                    name="nextOfKinState"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKinState}
                    error={errors.nextOfKinState}
                    placeholder=""
                  />
                  <PrimaryInputField
                    label="Email Address"
                    type="text"
                    name="nextOfKinEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKinEmail}
                    error={errors.nextOfKinEmail}
                    placeholder=""
                  />
                </div>

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <PrimaryInputField
                    label="Next of Kin Phone Number"
                    type="text"
                    name="nextOfKinPhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKinPhone}
                    error={errors.nextOfKinPhone}
                    placeholder=""
                  />
                </div>

                <hr className="w-full bg-gray-400 my-5" />

                <h2 className="text-primaryText my-5 text-xs font-bold ">
                  UPLOAD DOCUMENTS
                </h2>
                <hr className="w-full bg-gray-400 my-5" />

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <FileUploadField
                    file={values.governmentId}
                    label="Government ID"
                    handleChange={undefined}
                    name={""}
                    types={["PDF", "JPEG", "PNG"]}
                  />

                  <FileUploadField
                    file={values.utilityBill}
                    label="Utility Bill"
                    handleChange={handleChange}
                    name={"utilityBill"}
                    types={["PDF", "JPEG", "PNG"]}
                  />
                </div>

                <hr className="w-full bg-gray-400 my-5" />

                <h2 className="text-primaryText my-5 text-xs font-bold ">
                  FINANCIAL RECORDS
                </h2>
                <hr className="w-full bg-gray-400 my-5" />

                <div className="block md:grid md:grid-cols-2 md:gap-5">
                  <FileUploadField
                    file={values.governmentId}
                    label="Government ID"
                    handleChange={undefined}
                    name={""}
                    types={["PDF", "JPEG", "PNG"]}
                  />

                  <FileUploadField
                    file={values.utilityBill}
                    label="Utility Bill"
                    handleChange={handleChange}
                    name={"utilityBill"}
                    types={["PDF", "JPEG", "PNG"]}
                  />
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
