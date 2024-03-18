import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { Button, Divider } from "@mui/material";
import "./style.css";
function Login() {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "120px",
        display: "grid",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "475px",
          height: "513px",
          boxShadow: "0 0 0.5rem gainsboro",
          padding: "8%",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#000",
          }}
        >
          <p>Login</p>
          <p>Dont have an account</p>
        </div>
        <br />
        <div style={{ display: "grid" }}>
          <div>
            <p>Email Address</p>
            <input
              type="text"
              style={{
                width: "400px",
                height: "41px",
                marginTop: "1%",
                outline: "none",
              }}
            />
          </div>
          <br />
          <div>
            <p>Password</p>
            <div style={{ display: "flex" }}>
              <input
                type="password"
                style={{
                  width: "400px",
                  height: "41px",
                  marginTop: "1%",
                  outline: "none",
                  paddingTop: "2.5%",
                }}
                placeholder="******"
              />
              <button
                style={{
                  width: "44px",
                  height: "39.9px",
                  cursor: "pointer",
                  position: "relative",
                  border: "none",
                  borderTop: "1px solid #767676",
                  outline: "none",
                  background: "#fff",
                  marginTop: "1%",
                  marginLeft: "-10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "0",
                }}
              >
                <AiOutlineEyeInvisible />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#000",
                paddingRight: "10%",
                marginTop: "3%",
              }}
            >
              <div style={{ display: "flex", gap: "0%" }}>
                <input type="checkbox" />
                <p>Keep me sign in</p>
              </div>
              <p style={{ paddingLeft: "-10%" }}>Forgot Password</p>
            </div>
            <br />
            <div>
              <Button
                sx={{
                  width: "400px",
                  height: "42px",
                  background: "#1677FF",
                  textTransform: "capitalize",
                }}
                className="bg"
              >
                Login
              </Button>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div
                  style={{ width: "150px", border: "1px solid #F0F0F0" }}
                ></div>
                <p>Login With</p>
                <div
                  style={{ width: "150px", border: "1px solid #F0F0F0" }}
                ></div>
              </div>
              <br />
              <div style={{ display: "flex", gap: "4%" }}>
                <button
                  style={{
                    width: "120px",
                    cursor: "pointer",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4%",
                  }}
                >
                  <FcGoogle /> Google
                </button>
                <button
                  style={{
                    width: "120px",
                    cursor: "pointer",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4%",
                  }}
                >
                  <ImTwitter color="#0f0" />
                  Twitter
                </button>
                <button
                  style={{
                    width: "120px",
                    cursor: "pointer",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4%",
                  }}
                >
                  <FaFacebookF color="#4267B2" /> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
