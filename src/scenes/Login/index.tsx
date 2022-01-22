import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginSuccess } from "./modules";

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // TODO: Add login logic, store username and password in a state and login
  // Fetch the user list from: https://jsonplaceholder.typicode.com/users
  // If the username is from the list, dispatch a login success
  return (
    <div>
      <div>
        <div style={{ marginTop: 16 }}>
          <input placeholder={"Username"} onChange={(text) => {}} />
          <input placeholder={"Password"} onChange={(text) => {}} />
        </div>
        <button
          onClick={() => {
            dispatch(loginSuccess("user"));
            history.push("/home");
          }}
        >
          Login!
        </button>
      </div>
    </div>
  );
};

const LoginScreen = connect()(LoginComponent);
export default LoginScreen;
