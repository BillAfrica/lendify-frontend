import Login from "./pages/auth/Login";
import SignupBorrower from "./pages/auth/SignUp/SignupBorrower";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPasswordFlow from "./pages/auth/ResetPassword/ForgetPasswordFlow";
import SignUpFlow from "./pages/auth/SignUp/SignUpFlow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPasswordFlow />} />
        <Route path="onboarding" element={<SignUpFlow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
