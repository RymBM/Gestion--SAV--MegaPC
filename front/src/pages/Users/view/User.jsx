import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function User() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "email",
      headerName: "email",
      width: 270,
    },
    {
      field: "user_name",
      headerName: "user_name",
      width: 150,
    },
  ];

  const [dataa, setDataa] = React.useState();
  const get = async () => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    get();
  }, []);

  console.log(dataa);
  return (
    <div>
      <div className="d-flex justify-content-between pb-4">
        <h2 className="p-3">List des Users</h2>
        <Link to={"add"}>
          <Button style={{backgroundColor:"#B80000"}} variant="contained" >Ajouter un User</Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid columns={columns}
        rows={dataa}
        />
      </div>
    </div>
  );
}

export default User;
