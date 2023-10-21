import { Box, Typography } from '@mui/material';
import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

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
    const bull = (
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        •
      </Box>
    );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          <Navbar />
          <Box sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Typography variant="h6" component="h6">
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
                    <Card sx={{ minWidth: 275 }}>
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
                            <Typography>50%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Client Satisfaction
                            <Typography>55%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Revenue Generated
                            <Typography>55%</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={3}>
                    <Card sx={{ minWidth: 200 }}>
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
                              px: 1,
                            }}
                          >
                            Total
                            <Typography>50%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Active
                            <Typography>55%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            New
                            <Typography>55%</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={3}>
                    <Card sx={{ minWidth: 200 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Active User Base
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
                            <Typography>50%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Client Satisfaction
                            <Typography>55%</Typography>
                          </Box>
                          <Box
                            sx={{
                              fontSize: 12,
                              borderLeft: "2px solid black",
                              px: 1,
                            }}
                          >
                            Revenue Generated
                            <Typography>55%</Typography>
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
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                          be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid xs={4}>
                    <Card sx={{ minWidth: 200 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                          be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
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