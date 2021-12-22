import  SingUp  from "../Auth/SingUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SingUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
