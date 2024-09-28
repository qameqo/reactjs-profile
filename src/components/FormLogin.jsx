import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import getNewToken from "./getNewToken";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

let FormLogin = () => {
  const [IDCard, setIDCard] = useState("");
  const [IDEmp, setIDEmp] = useState("");

  function ChangeidCard(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIDCard(e.target.value);
    }
  }
  function ChangeidEmp(e) {
    const re = /^[a-zA-Z0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIDEmp(e.target.value.toLowerCase());
    }
  }
  let fname = "";
  const signin = () => {
    toast("🦄 Unauthorized !!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("signined");
    const idemp = document.getElementById("txtidemp").value;
    const idcard = document.getElementById("txtidcard").value;
    var tokenAPI = "";

    getNewToken(function (response) {
      console.log("getNewToken");
      tokenAPI = "Bearer " + response;
      const url = "http://localhost:26734/api/EmpInfo/GetEmployeeInfo";
      const params = {
        id_emp: idemp,
        id_card: idcard,
      };
      axios
        .post(url, params, {
          headers: {
            Authorization: tokenAPI,
          },
        })
        .then((response) => {
          localStorage.setItem("isLogin", "T");
          fname = response.data.data[0];
          localStorage.setItem("EmpInfo", JSON.stringify(fname));
          Changepage();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast("🦄 Unauthorized !!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          console.log(error);
        })
        .error((err) => {
          console.log(err);
        });
    });
  };
  const navigate = useNavigate();

  const Changepage = () => {
    navigate("/Home");
  };
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin === "F") {
    return (
      <div className="flex justify-center m-72">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Sign in
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Leave of absence System.
          </Typography>
          <form
            className="formlogin mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
            noValidate
            autoComplete="off"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                id="txtidemp"
                label="Employee_ID"
                size="md"
                color="white"
                value={IDEmp}
                onChange={ChangeidEmp}
              />
              <Input
                id="txtidcard"
                label="National_ID"
                type="password"
                size="md"
                color="white"
                maxLength={13}
                value={IDCard}
                onChange={ChangeidCard}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="white"
                  className="flex items-center font-normal"
                >
                  Remember Me
                  <a className="font-medium transition-colors hover:text-gray-900"></a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button onClick={signin} className="mt-4" fullWidth>
              sign in
            </Button>
            <ToastContainer />
          </form>
        </Card>
      </div>
    );
  } else {
    return <Home />;
  }
};

export default FormLogin;
