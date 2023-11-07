import "./forgotPassword.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ForgotPassword: React.FC = () => {
  return (
    <>
      <div className="forgot-wrapper">
        <div id="forgot-login-inputs">
          <div className="forgot-top-part">
            <ArrowBackIcon className="forgot-arrow"></ArrowBackIcon>
            <h1 className="forgot-h1">Forgot Password</h1>
          </div>

          <div id="forgot-email">
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              sx={{ m: 1, width: "25ch" }}
            />
          </div>

          <Button className="forgot-button" variant="contained">
            Recover Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
