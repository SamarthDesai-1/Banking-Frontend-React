import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Ad_User_Transrction.css";
import axios from "axios";
import { useParams } from "react-router-dom";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Ad_User_Transrction() {
  const { userId } = useParams();
  const [dataTrans, setData] = useState([]);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      await axios
        .get(
          `http://localhost:5000/test/api/users/get-transactionr-data/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setData(response.data.Data[0].TransactionHistory);
            console.log(dataTrans);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      setOpen(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="Transectiontable">
        <h2 className="mb-3">User Transaction data</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <td className="text-deco">No</td>
              <td className="text-deco">Date</td>
              <td className="text-deco">Message</td>
              <td className="text-deco">Status</td>
              <td className="text-deco">Amount</td>
            </tr>
          </thead>
          <tbody>
            {dataTrans.map((elem, index) => (
              <tr key={index} className="text-deco">
                <td className="text-deco">{index + 1}</td>
                <td className="text-deco">{elem.date?.substring(0, 10)}</td>
                <td className="text-deco">{elem.msg}</td>
                <td className="text-deco">
                  {elem.statementStatus === "Dr" ? "Debit" : "Credit"}
                </td>
                <td
                  className="status"
                  style={{
                    color: elem.statementStatus === "Dr" ? "red" : "green",
                  }}
                >
                  {elem.statementStatus === "Dr" ? "-" : "+"}
                  {elem.transferAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ad_User_Transrction;
