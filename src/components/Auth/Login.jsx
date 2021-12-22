import React from "react";
// import { Navigate } from "react-router-dom";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        // push("/");
        // <Navigate to="/" />;
      })
      .catch(() => alert("invalid user!!!"));
  };

  return <Form title="sing in" handleClick={handleLogin} />;
};

export default Login;
