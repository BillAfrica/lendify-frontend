import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import { appName } from "../../../utils/constants";
import InputError from "../../../components/base/Error/InputError";
import classNames from "classnames";
import ProgressBar from "../../../components/block/progress/ProgressBar";

interface UserTypeProps {
  setStage: Function;
}
function UserType({ setStage }: UserTypeProps) {
  const roles = [
    {
      id: 1,
      title: "Borrorwer",
      value: "borrorwer",
      description: "",
    },
    {
      id: 2,
      title: "Investor",
      value: "lender",
      description:
        "Invest in borrower's dream, determine your interest rate, get access to real time credit score and make informed decision on your investments",
    },
  ];
  return (
    <Formik
      initialValues={{
        role: "",
      }}
      validationSchema={Yup.object({
        role: Yup.string().required("Account Type  is required"),
      })}
      onSubmit={(values) => {
        sessionStorage.setItem("userType", values.role);
        if (values.role === "borrorwer") {
          return setStage(2);
        }
        setStage(3);
      }}
    >
      {({ values, errors, handleBlur, setValues, handleSubmit }) => (
        <div>
          <div className="flex justify-between items-center">
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Welcome To {appName}
            </p>

            <ProgressBar value={33.33} text={"1/3"} />
          </div>

          <form onSubmit={handleSubmit}>
            {roles.map((role) => (
              <div
                onChange={() =>
                  setValues({
                    role: role.value,
                  })
                }
                className="w-full my-5"
              >
                <div
                  className={classNames(
                    "w-full p-5 rounded-xl h-32",
                    role.value === values.role
                      ? "border-primary border-2"
                      : "border-gray-200 border"
                  )}
                >
                  <div className="flex justify-between items-center ">
                    <p className="font-bold text-secondary">{role.title}</p>

                    <input
                      checked={role.value === values.role}
                      onChange={(e) =>
                        setValues({
                          role: e.target.value,
                        })
                      }
                      onBlur={handleBlur}
                      type="radio"
                      value={role.value}
                      className="h-5 w-5"
                    />
                  </div>

                  <p className="text-xs mt-3">{role.description}</p>
                </div>
              </div>
            ))}
            <InputError message={errors.role} />

            <PrimaryButton
              label="Continue"
              onClick={handleSubmit}
              type="submit"
            />
          </form>
        </div>
      )}
    </Formik>
  );
}

export default UserType;
