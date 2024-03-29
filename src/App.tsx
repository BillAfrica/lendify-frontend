import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import SignupBorrower from "./pages/auth/SignupBorrower";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <div>
      <SignupBorrower />
      <Login />
      <ForgetPassword />
      <ResetPassword />
    </div>
  );
}

export default App;
