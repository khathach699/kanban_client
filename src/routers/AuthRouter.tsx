import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp } from "../screens";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col ">
          <h1>fa fa fa</h1>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
