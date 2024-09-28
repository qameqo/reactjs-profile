import React, { useState, useEffect } from "react";
import FormLogin from "../components/FormLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getNewToken from "../components/getNewToken";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

const Home = () => {
  const [emp, setEmp] = useState("");
  const isLogin = localStorage.getItem("isLogin");
  const retrievedObject = localStorage.getItem("EmpInfo");
  const [typeleave, setTypeLeave] = useState([]);

  if (emp == "") {
    if (isLogin == "T") {
      setEmp(JSON.parse(retrievedObject));
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        getNewToken(async function (response) {
          const tokenAPI = "Bearer " + response;
          const url = "http://localhost:26734/api/TypeLeave/GetTypeOfLeave";
          const res = await axios.post(url, "", {
            headers: {
              Authorization: tokenAPI,
            },
          });
          const defMaster = [];
          const newArrres = res.data.data;
          newArrres.map((item) => {
            defMaster.push({
              key: item.gu_id,
              value: item.name_th,
            });
          });
          setTypeLeave(defMaster);
        });
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  if (isLogin == "T") {
    return (
      <>
        <div>
          <div className="grid grid-rows-1 justify-center grid-flow-col gap-1 m-10">
            <div>
              <Typography variant="h4" className=" drop-shadow-3xl text-white">
                Form Leave
              </Typography>
            </div>
          </div>
          <div className=" flex justify-center ml-20 mr-20  mb-5 pl-20 pr-20 pt-5 pb-5 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 p-10 bg-white rounded-3xl shadow-2xl">
              <div>
                <Select
                  variant="outlined"
                  label="Select TypeLeave"
                  className="shadow-md"
                  color="light-blue"
                >
                  {typeleave.map((item) => (
                    <Option
                      key={item.key}
                      value={item.key}
                      className="flex items-center gap-2 "
                    >
                      {item.value}
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <Input
                  id="txtStDate"
                  label="Start Date"
                  type="date"
                  size="md"
                  color="light-blue"
                  className=" shadow-md"
                />
              </div>
              <div>
                <Input
                  id="txtEnDate"
                  label="End Date"
                  type="text"
                  size="md"
                  color="light-blue"
                  className=" shadow-md"
                />
              </div>
              <div>
                <Input
                  id="txtStTime"
                  label="Start Time"
                  type="text"
                  size="md"
                  color="light-blue"
                  className=" shadow-md"
                />
              </div>
              <div>
                <Input
                  id="txtEnTime"
                  label="End Time"
                  type="text"
                  size="md"
                  color="light-blue"
                  className=" shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <FormLogin />;
  }
};

export default Home;
