import { Button } from "antd";
import React from "react";

const SocialLogin = () => {
  return (
    <Button
      style={{ width: "100%", marginTop: "20px" }}
      size="large"
      icon={
        <img
          width={24}
          height={24}
          src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
          alt="google-logo"
        ></img>
      }
    >
      Google{" "}
    </Button>
  );
};

export default SocialLogin;
