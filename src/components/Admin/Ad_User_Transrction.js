import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Ad_User_Transrction.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import jsPDF from "jspdf";
import "jspdf-autotable";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Ad_User_Transrction() {
  const { userId } = useParams();
  const [dataTrans, setData] = useState([]);
  const [statement, setStatement] = useState({ TransactionHistory: [] });

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
          setStatement(response.data.Data[0]);
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


  const downloadPDF = () => {
    const doc = new jsPDF();

   // Adding heading for Transect Bank
   doc.setFont("helvetica", "bold");
   doc.setFontSize(24);
   doc.setTextColor(0, 102, 204); // Setting text color to a shade of blue

   // Adding heading for Transect Bank
   const headingText = "Transact Bank";
   const headingWidth = doc.getStringUnitWidth(headingText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
   const pageWidth = doc.internal.pageSize.getWidth();
   const xPosition = (pageWidth - headingWidth) / 2;
   doc.text(headingText, xPosition, 10);

   // Reset font styles for the rest of the content
   doc.setFont("helvetica", "normal");
   doc.setFontSize(12);
   doc.setTextColor(0, 0, 0); // Reset text color to black

   // Adding Transaction Statement title
   doc.text("Transaction Statement", 12, 10);

    doc.autoTable({
      head: [["No", "Date", "Message", "Status", "Amount"]],
      body: statement.TransactionHistory.map((elem, index) => {
        return [
          index + 1,
          elem.date?.substring(0, 10),
          elem.msg,
          elem.statementStatus,
          elem.transferAmount,
        ];
      }),
    });
    doc.save("statement.pdf");
  };

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
        <div className="row">
          <div className="col-sm-11">
            <h2 className="mb-3">User Transaction data</h2>
          </div>
          <div className="col-sm-1">
            <Tooltip title="Download Statement" arrow>
            <DownloadForOfflineIcon
              className="download"
              onClick={downloadPDF}
            style={{fontSize:"33px"}}
            ></DownloadForOfflineIcon>
            </Tooltip>
          </div>
        </div>

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
