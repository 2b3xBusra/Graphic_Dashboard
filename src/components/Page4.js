import React from 'react';
import { Typography, Container, Grid, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ScatterChart,
  Scatter,
  ResponsiveContainer
} from 'recharts';

const scatterData = [
  { x: 15, y: 4000, z: 4, name: '6.5' },
  { x: 18, y: 3000, z: 3, name: '10.2.4' },
  { x: 21, y: 2000, z: 5, name: '10.2.5' },
  { x: 24, y: 2780, z: 8, name: '10.5.2' },
  { x: 27, y: 1890, z: 6, name: '10.6.1' },
  { x: 30, y: 2390, z: 5, name: '11.2.1' },
];

const barData = [
  { name: '10.2.4', Amazon: 4000, Centos: 2400, Debian: 2400, RHEL7: 2400, Ubuntu: 2400, Windows: 2400 },
  { name: '10.2.5', Amazon: 3000, Centos: 1398, Debian: 2210, RHEL7: 2210, Ubuntu: 2210, Windows: 2210 },
  { name: '11.2.1', Amazon: 2000, Centos: 9800, Debian: 2290, RHEL7: 2290, Ubuntu: 2290, Windows: 2290 },
  { name: '11.2.3', Amazon: 2780, Centos: 3908, Debian: 2000, RHEL7: 2000, Ubuntu: 2000, Windows: 2000 },
  { name: '11.4', Amazon: 1890, Centos: 4800, Debian: 2181, RHEL7: 2181, Ubuntu: 2181, Windows: 2181 },
];

const tableData = [
  { time: 'Aug 17, 2020 @ 13:24:11.878', agentName: 'Windows', rule: '10.2.4, 10.2.5', description: 'Logon Failure: Unknown user or bad password', level: 5, id: 5716 },
  { time: 'Aug 17, 2020 @ 13:24:09.874', agentName: 'RHEL7', rule: '11.5', description: 'File modified in /home/wazuh directory', level: 7, id: 100200 },
  { time: 'Aug 17, 2020 @ 13:24:09.733', agentName: 'Ubuntu', rule: '6.5, 11.4, 6.5.1', description: 'Web attack: SQL injection attempt', level: 6, id: 31103 },
];

const pciData = [
  { requirement: 'Requirement 10', count: 332612 },
  { requirement: 'Requirement 11', count: 55593 },
  { requirement: 'Requirement 6', count: 203 },
  { requirement: 'Requirement 5', count: 4 },
  { requirement: 'Requirement 1', count: 0 },
  { requirement: 'Requirement 2', count: 0 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const Page4 = () => {
  return (
    <Container maxWidth="xl">
      {/* Search and filter section */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Search" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>KQL</Button>
              <Button variant="outlined" color="primary">Last 24 hours</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Charts section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              PCI DSS requirements
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" name="timestamp" />
                <YAxis dataKey="y" name="count" />
                <Tooltip />
                <Scatter name="Requirements" data={scatterData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Requirements by agent
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Amazon" stackId="a" fill="#8884d8" />
                <Bar dataKey="Centos" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Debian" stackId="a" fill="#ffc658" />
                <Bar dataKey="RHEL7" stackId="a" fill="#d88484" />
                <Bar dataKey="Ubuntu" stackId="a" fill="#a4de6c" />
                <Bar dataKey="Windows" stackId="a" fill="#d1b2e0" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent events table */}
      <Box sx={{ mt: 4 }}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Recent events
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Agent Name</TableCell>
                  <TableCell>Rule</TableCell>
                  <TableCell>Rule Description</TableCell>
                  <TableCell>Rule Level</TableCell>
                  <TableCell>Rule ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.agentName}</TableCell>
                    <TableCell>{row.rule}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.level}</TableCell>
                    <TableCell>{row.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* PCI DSS Requirements */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '20px', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                PCI DSS
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {pciData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.requirement}</TableCell>
                        <TableCell>{row.count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '20px', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Requirements
              </Typography>
              <TextField fullWidth label="Filter requirements" variant="outlined" />
              {/* Add additional content for requirements filter results */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Page4;