import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import getNewToken from "./getNewToken";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiCallMade = useRef(false);
  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        const tokenResponse = await getNewToken();
        if (tokenResponse != null) {
          const tokenAPI = "Bearer " + tokenResponse;

          const url = "http://localhost:26734/api/TypeLeave/GetTypeOfLeave";
          const res = await axios.post(url, "", {
            headers: {
              Authorization: tokenAPI,
            },
          });

          const defMaster = res.data.data.map((item) => ({
            key: item.gu_id,
            value: item.name_th,
          }));

          setData(defMaster);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
      }
    };
    console.log("useEffect called");
    if (!apiCallMade.current) {
      console.log("API call being made");
      apiCallMade.current = true;
      fetchTokenAndData();
    }
  }, []); // Ensure the useEffect runs only once by using an empty dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.key}>
          {item.key}: {item.value}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
