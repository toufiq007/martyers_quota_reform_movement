import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import useMartyers from "../../../hooks/useMartyers";
import AbuSayed from "../../../assets/abu_sayed.jpg";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";

const tableHeading = ["Avatar", "Id", "Name", "Institution", "Actions"];

const AdminHome = () => {
  const { isLoading, martyers } = useMartyers();
  console.log(martyers);
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/deleteMartyer/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="admin_heading" style={{ textAlign: "center" }}>
        Admin Home page
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="martyer_table_container"
          style={{ width: "90%", margin: "auto", overflow: "auto" }}
        >
          <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ background: "#000", color: "#fff" }}>
                  {tableHeading.map((tableHeading, index: number) => {
                    return (
                      <TableCell key={index} sx={{ color: "#fff" }}>
                        {tableHeading}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {martyers &&
                  martyers.length > 0 &&
                  martyers.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt="Remy Sharp" src={row.personalImage} />
                      </TableCell>
                      <TableCell>{row._id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.institution}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ marginRight: "10px" }}
                          onClick={() =>
                            navigate(`/admin/updateMartyer/${row._id}`)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(row._id)}
                          variant="contained"
                          size="small"
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
