import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginSuccess } from "./modules";

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <div>
        <div style={{ marginTop: 16 }}>
          <input placeholder={"Username"} onChange={(text) => {}} />
          <input placeholder={"Password"} onChange={(text) => {}} />
        </div>
        <button
          onClick={(btn) => {
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
