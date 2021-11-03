import React from "react";
import { connect } from "react-redux";

const LoginComponent: React.FC = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: 16 }}>
          <input placeholder={"Username"} onChange={(text) => {}} />
          <input placeholder={"Password"} onChange={(text) => {}} />
        </div>
        <button onClick={(btn) => {}}>Login!</button>
      </div>
    </div>
  );
};

const LoginScreen = connect()(LoginComponent);
export default LoginScreen;
