import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import { setUser } from "../../store/userReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const dispatch = useDispatch();
  //   const { push } = useHistory();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        // <Redirect to="/" />;
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};

export default SingUp;
