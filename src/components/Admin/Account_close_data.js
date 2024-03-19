import React, { useState } from "react";
import "../../style-css/Admin/Account_close_data.css";
import Admin_Sidebar from "./Admin_Sidebar";
import Admin_Navbar from "./Admin_Navbar";
import { useEffect } from "react";
import axios from "axios";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Tostyfy from "../Tostyfy";

function Account_close_data() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const fetchData = async () => {
    setOpen(true);
    await axios
      .get("http://localhost:5000/test/api/users/get-close-requests", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.Data);
      })
      .catch((e) => {
        console.log(e);
      });
    setOpen(false);
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  const handleConfirm = async (id, status) => {
    setOpen(true);
    console.log(id, status);

    const data = await axios
      .post(
        "http://localhost:5000/test/api/users/admin-request",
        { id, status },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        if (response?.status == 200) {
          toast.success("User deleted successfully");
        }
        fetchData();
      })
      .catch(async (e) => {
        toast.success("User delete account request is rejected");
        console.log(e);
        fetchData();
      });
    setOpen(false);
  };

  const handleStatus = async (id) => {
    console.log(id);
    console.log("status");
    navigate(`/Loan_status/${id}`);
  };

  return (
    <div className="acclo">
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="clotable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Account Close data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    // value={searchQuery}
                    // onChange={handleSearchAccountNoChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Reason</th>
                  <th scope="col">close</th>
                  <th scope="col">Discard</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.Reason}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={(e) =>
                          handleConfirm(elem.AccountNo, "confirm")
                        }
                      >
                        Confirm
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleConfirm(elem.AccountNo, "reject")}
                      >
                        Reject
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-info"
                        style={{ color: "white" }}
                        onClick={(e) => handleStatus(elem.AccountNo)}
                      >
                        Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account_close_data;
