import React, { useState } from "react";
import "../../style-css/Admin/Account_close_data.css";
import Admin_Sidebar from "./Admin_Sidebar";
import Admin_Navbar from "./Admin_Navbar";
import { useEffect } from "react";
import axios from "axios";

function Account_close_data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  const handleConfirm = async (id, status) => {
    console.log(id, status);

    const data = await axios
      .post(
        "",
        { id, status },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response?.status == 200) {
          alert("User deleted successfully");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="acclo">
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
