import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../../components/block/button/PrimaryButton";
import { appName } from "../../../utils/constants";
import InputError from "../../../components/base/Error/InputError";
import classNames from "classnames";
import ProgressBar from "../../../components/block/progress/ProgressBar";

interface AccountTypeProps {
  setStage: Function;
}
function AccountType({ setStage }: AccountTypeProps) {
  const types = [
    {
      id: 1,
      title: "Corporate",
      value: "individual",
      description:
        "Registered business entity with CAC, Tax clearance and article certificate of incoporation",
    },
    {
      id: 2,
      title: "Individual",
      value: "lender",
      description:
        "Individual with experience in investing, risks managements and financial awareness",
    },
  ];
  return (
    <Formik
      initialValues={{
        type: "",
      }}
      validationSchema={Yup.object({
        type: Yup.string().required("Account Type  is required"),
      })}
      onSubmit={(values) => {
        sessionStorage.setItem("type", values.type);
        setStage(4);
      }}
    >
      {({ values, errors, handleBlur, setValues, handleSubmit }) => (
        <div>
          <div className="w-full flex justify-between items-center">
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Choose Account Type
            </p>
            <ProgressBar text="2/3" value={66.6} />
          </div>

          <form onSubmit={handleSubmit}>
            {types.map((type) => (
              <div
                onChange={() =>
                  setValues({
                    type: type.value,
                  })
                }
                className="w-full my-5"
              >
                <div
                  className={classNames(
                    "w-full p-5 rounded-xl h-32",
                    type.value === values.type
                      ? "border-primary border-2"
                      : "border-gray-200 border"
                  )}
                >
                  <div className="flex justify-between items-center ">
                    <p className="font-bold text-secondary">{type.title}</p>

                    <input
                      checked={type.value === values.type}
                      onChange={(e) =>
                        setValues({
                          type: e.target.value,
                        })
                      }
                      onBlur={handleBlur}
                      type="radio"
                      value={type.value}
                      className="h-5 w-5"
                    />
                  </div>

                  <p className="text-xs mt-3">{type.description}</p>
                </div>
              </div>
            ))}
            <InputError message={errors.type} />

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

export default AccountType;
