import React, { useState } from "react";
import SignupBorrower from "./SignupBorrower";
import SignUpLender from "./SignupLender";
import AuthLayout from "../../../components/base/layout/AuthLayout";
import UserType from "./UserType";
import AccountType from "./AccountType";
import SetPin from "../SetPin";
import ProfileDetails from "./ProfileDetails";
import Kyc from "./Kyc";

function SignUpFlow() {
  const [role, setRole] = useState("");
  const [stage, setStage] = useState(0);
  return (
    <>
      {/* <AuthLayout>
        {stage === 1 && <UserType setStage={setStage} />}
        {stage === 2 && <SignupBorrower />}
        {stage === 3 && <AccountType setStage={setStage} />}
        {stage === 4 && <SignUpLender />}
        {stage === 5 && <SetPin />}
      </AuthLayout> */}
      {/* {stage === 0 && <ProfileDetails />} */}
      {stage === 0 && <Kyc />}

      {}
    </>
  );
}

export default SignUpFlow;
