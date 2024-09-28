import React, { useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const params = {
  ExpireMinutes: 3,
  Roles: "user",
  Password: "qameqo",
  Username: "qameqo",
  Issuer: "qameqo",
};
const getNewToken = async () => {
  const response = await axios
    .post("http://localhost:26734/api/Token/BuildToken", params)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("ERROR : " + err);
    });
  if (response != null && response.data != null) {
    return response.data.token;
  }
};
export default getNewToken;
