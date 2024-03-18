import { AiFillCopy, AiOutlineCode, AiOutlineCopy } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";
// import { VscTerminalCmd } from "react-icons/vs";
import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";
// import { AiOutlineCode, AiOutlineCopy } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import "./style.css";
function Typogrpahy() {
  return (
    <div
      style={{
        marginTop: "8%",
        margin: "0.5%",
        zIndex: "1",
        position: "relative",
      }}
    >
      <div>
        <p>Home / Typography</p>
        <br />
        <p>Typography</p>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "space-between",
        }}
        className="gridCard"
      >
        <div
          style={{ display: "grid", gap: "16px", width: "50%" }}
          className="father"
        >
          <Card
            className="card card1"
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "32px",
              justifyContent: "space-between",
              padding: "3%",
            }}
          >
            <div>
              <p style={{ fontSize: "12px", fontWeight: "600" }}> Basic</p>
              <p style={{ fontWeight: "600", fontSize: "34px" }}> Inter</p>
              <p style={{ fontSize: "12px", fontWeight: "600" }}>Font Family</p>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "gray" }}>
                Regular / Medium / Bold
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
                alignItems: "end",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              textAlign: "start",
              marginTop: "28px",
              display: "grid",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Heading</p>
            <div style={{ gap: "4px", display: "grid" }}>
              <p style={{ fontWeight: "600", fontSize: "34px" }}> H1 Heading</p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size: 38px / Weight: Bold / Line Height: 46px
              </span>
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <p style={{ fontSize: "28px", fontWeight: "600" }}> H2 Heading</p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size: 30px / Weight: Bold / Line Height: 38px
              </span>
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <p style={{ fontWeight: "600", fontSize: "22px" }}> H3 Heading</p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size: 24px / Weight: Bold / Line Height: 32px
              </span>
            </div>
            <div style={{ gap: "8px", display: "grid" }}>
              <p style={{ fontSize: "20px", fontWeight: "600" }}> H4 Heading</p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size: 20px / Weight: Bold / Line Height: 28px
              </span>
            </div>
            <div style={{ gap: "8px", display: "grid" }}>
              <p style={{ fontWeight: "600", fontSize: "16px" }}> H5 Heading</p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size 16px / Weight: Bold / Line Height: 24px
              </span>
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>
                H6 Heading / Subheading
              </p>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Size: 14px / Weight: Bold / Line Height: 22px
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Body 1</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontSize: "12px", fontWeight: "600" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontWeight: "500", fontSize: "12px", color: "gray" }}>
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Body 2</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontWeight: "normal", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "gray",
                }}
              >
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontWeight: "600", fontSize: "12px" }}> Subtitle 1</p>
            <div style={{ display: "grid", gap: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "12px", color: "gray", fontWeight: "500" }}>
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              padding: "3%",
              display: "grid",
              gap: "32px",
            }}
          >
            <p style={{ fontWeight: "600", fontSize: "12px" }}> Subtitle 2</p>
            <div style={{ display: "grid", gap: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "500" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "12px", color: "gray", fontWeight: "500" }}>
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              padding: "3%",
              gap: "32px",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Caption</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontSize: "12px", fontWeight: "500" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "12px", color: "gray", fontWeight: "500" }}>
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
        </div>
        <div style={{ width: "50%" }} className="father">
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Alignment</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "11px",
                  fontWeight: "500",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur aliqua adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p
                style={{
                  fontSize: "11px",
                  textAlign: "right",
                  fontWeight: "500",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p
                style={{
                  fontSize: "11px",
                  textAlign: "right",
                  fontWeight: "500",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "500" }}>Gutter Bottom</p>
            <div style={{ display: "grid", gap: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "500" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "11px", fontWeight: "500" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "32px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}>Overline</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontWeight: "500", fontSize: "13px" }}>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO
                EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </p>
              <p style={{ fontWeight: "500", color: "gray", fontSize: "12px" }}>
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              display: "grid",
              marginTop: "28px",
              gap: "4px",
              paddingTop: "24px",
              paddingBottom: "24px",
              padding: "3%",
            }}
          >
            <p style={{ fontSize: "12px", fontFamily: "600" }}> Link</p>
            <div style={{ display: "grid", gap: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "400", color: "blue" }}>
                www.mantis.com
              </p>
              <p style={{ color: "gray", fontSize: "12px", fontWeight: "400" }}>
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              paddingInline: "16px",
              padding: "3%",
              marginTop: "28px",
              display: "grid",
              gap: "8px",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}> Colors</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontSize: "12px", fontWeight: "400" }}>
                This is textPrimary text color.
              </p>
              <p style={{ fontSize: "12px", fontWeight: "400", color: "gray" }}>
                This is textPrimary text color.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "blue",
                }}
              >
                This is textPrimary text color.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "gray",
                }}
              >
                This is textPrimary text color.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                This is textPrimary text color.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "orange",
                }}
              >
                This is textPrimary text color.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "orange",
                }}
              >
                This is textPrimary text color.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              padding: "3%",
              display: "grid",
              gap: "32px",
              paddingTop: "24px",
              paddingBottom: "24px",
              marginTop: "28px",
            }}
          >
            <p style={{ fontSize: "12px", fontWeight: "600" }}>Paragraph</p>
            <div style={{ gap: "16px", display: "grid" }}>
              <p style={{ fontWeight: "500", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "gray" }}>
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
          <Card
            className="card"
            style={{
              display: "grid",
              gap: "32px",
              paddingTop: "24px",
              paddingBottom: "24px",
              marginTop: "28px",
              padding: "3%",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                paddingInline: "6px",
                paddingTop: "20px",
                paddingBottom: "4px",
              }}
            >
              Font Style
            </p>
            <div style={{ gap: "16px", display: "grid" }}>
              <i style={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
              <i style={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
              <p style={{ fontWeight: "500", fontSize: "12px", color: "gray" }}>
                Size: 14px / Weight: Italic Regular & Italic Bold / Line Height:
                22px
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                gap: "24px",
              }}
            >
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Typogrpahy;
