import { Card } from "@mui/material";
import React from "react";
import "../../App.css";
function Sample() {
  return (
    <div
      style={{
        marginBottom: "120px",
        margin: "auto",
        zIndex: "auto",
        width: "100%",
        height: "100vh",
        marginInline: "2%",
      }}
    >
      <div style={{ marginTop: "10%" }}>
        <div style={{ paddingTop: "-50%" }}>
          <div style={{ fontSize: "14px", display: "flex", gap: "1%" }}>
            <div style={{ display: "flex" }}>
              <p>Home</p>
            </div>
            <p>/</p>
            <p style={{ fontWeight: "600", fontSize: "16px" }}>Sample Page</p>
          </div>
          <p style={{ marginTop: "1%", fontWeight: "bold" }}>Sample Page</p>
        </div>
        <br />
        <div>
          <Card
            style={{
              width: "96%",
              height: "163px",
              padding: "1.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              textAlign: "start",
            }}
          >
            <div
              style={{
                display: "grid",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "start",
              }}
            >
              <p>Sample Card</p>
              <br />
              <br />
              <p style={{ fontSize: "12px", width: "65%", marginTop: "-2%" }}>
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do
                elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu
                laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian
                bulla parian. Exceptive sin ocean cuspidate non president, sunk
                in culpa qui officiate descent molls anim id est labours.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Sample;
