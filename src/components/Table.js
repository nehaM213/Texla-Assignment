import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "CompanyName", label: "Company Name", minWidth: 140 },
  { id: "onboardingDate", label: "Onboarding Date", minWidth: 140 },
  {
    id: "goLiveDate",
    label: "Go-Live Date",
    minWidth: 120,
  },
  {
    id: "totalUserBase",
    label: "Total User Base",
    minWidth: 140,
    align:"center"
  },
  {
    id: "lastBilling",
    label: "Last Billing",
    minWidth: 105,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 10,
    align:"center"
  },
];

function createData(
  CompanyName,
  onboardingDate,
  goLiveDate,
  totalUserBase,
  lastBilling,
  status
) {
  return {
    CompanyName,
    onboardingDate,
    goLiveDate,
    totalUserBase,
    lastBilling,
    status,
  };
}

const rows = [
  createData(
    "Texlaculture",
    "12 Jan 2022",
    "7 Aug 2022",
    244,
    "7 Aug 2022",
    "Active"
  ),
  createData(
    "Texlaculture",
    "12 Jan 2022",
    "7 Aug 2022",
    244,
    "7 Aug 2022",
    "Active"
  ),
  createData(
    "Texlaculture",
    "12 Jan 2022",
    "7 Aug 2022",
    244,
    "7 Aug 2022",
    "Active"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, padding: 0 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.onboardingDate} sx={{height: 0}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{p:2}}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
