import { Box, Card } from "@mui/material";
import React from "react";
import "./style.css";
function Cards() {
  return (
    <div style={{ marginInline: "0%" }}>
      <p>Dashboard</p>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          justifyItems: "center",
          gap: "2%",
        }}
        className="grid"
      >
        <Card style={{ width: "100%", padding: "6%" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
            }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <p
              style={{
                height: "24px",
                width: "75px",
                background: "#1677ff",
                textAlign: "center",
                borderRadius: "7px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "5%" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "6%" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
            }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <p
              style={{
                height: "24px",
                width: "75px",
                background: "#1677ff",
                textAlign: "center",
                borderRadius: "7px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "5%" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "6%" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
            }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <p
              style={{
                height: "24px",
                width: "75px",
                background: "#faad14",
                textAlign: "center",
                borderRadius: "7px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "5%" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#faad14" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "6%" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
            }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <p
              style={{
                height: "24px",
                width: "75px",
                background: "#faad14",
                textAlign: "center",
                borderRadius: "7px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "5%" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677F" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
