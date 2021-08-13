import React from "react";
import SiteHeader from "../components/SiteHeader";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function HomePage() {
  return (
    <div className="product_body">
      <SiteHeader />
      <h1
        style={{
          padding: 25,
          maxWidth: "auto",
          justifySelf: "center",
          margin: "auto",
          marginTop: 300,
          textAlign: "center",
          fontWeight: "bold",
          color: "#3f51b5",
          fontSize: 72,
        }}
      >
        Welcome to{" "}
        <span
          style={{
            background: "#3f51b5",
            color: "white",
            padding: 5,
            borderRadius: 15,
          }}
        >
          {" "}
          CONSUMER ELECTRONICS
        </span>
      </h1>
    </div>
  );
}
