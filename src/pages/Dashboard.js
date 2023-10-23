import { Box, Typography } from '@mui/material';
import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Chart from "../components/Chart";
import Table from '../components/Table';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Dashboard() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          <Navbar />
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: 3,
              position: "relative",
              top: 40,
            }}
          >
            <Typography variant="h6" component="h6" sx={{ position: "static" }}>
              Client Management
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Dashboard" {...a11yProps(0)} />
                  <Tab label="Client Items" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <Card sx={{ minWidth: 275, minHeight: 120 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Key Performance Indicator
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Client Retention Rate
                            <Box
                              sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#091A7A",
                              }}
                            >
                              50%
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Client Satisfaction
                            <Box
                              sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#006C9C",
                              }}
                            >
                              55%
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Revenue Generated
                            <Box
                              sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#006124",
                              }}
                            >
                              50%
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={3}>
                    <Card sx={{ minWidth: 200, minHeight: 120 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Companies Status
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 2,
                            }}
                          >
                            Total
                            <Box
                              sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#091A7A",
                              }}
                            >
                              50%
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 2,
                              color: "#006124",
                            }}
                          >
                            Active
                            <Box
                              sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#006C9C",
                              }}
                            >
                              50%
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 2,
                            }}
                          >
                            New
                            <Box sx={{ fontSize: 16, fontWeight: "bold" }}>
                              50%
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={3}>
                    <Card sx={{ minWidth: 200, minHeight: 120 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Active User Base
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                          <Box
                            sx={{
                              fontSize: 12,
                              px: 1,
                            }}
                          >
                            89% App User
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              px: 1,
                            }}
                          >
                            11% Web User
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Onboarded Companies
                        </Typography>
                        <Table />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Regional Metrics
                        </Typography>
                        <Chart />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Client Items
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard