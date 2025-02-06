import React from 'react';
import { Typography, Container, Grid, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: '00:00', vpc: 4000, guardduty: 2400, inspector: 2400, macie: 2400, cloudtrail: 2400 },
  { name: '01:00', vpc: 3000, guardduty: 1398, inspector: 2210, macie: 2210, cloudtrail: 2210 },
  { name: '02:00', vpc: 2000, guardduty: 9800, inspector: 2290, macie: 2290, cloudtrail: 2290 },
  { name: '03:00', vpc: 2780, guardduty: 3908, inspector: 2000, macie: 2000, cloudtrail: 2000 },
  { name: '04:00', vpc: 1890, guardduty: 4800, inspector: 2181, macie: 2181, cloudtrail: 2181 },
];

const pieData = [
  { name: 'Vulnerabilities', value: 4000 },
  { name: 'Misconfigurations', value: 3000 },
  { name: 'Anomalies', value: 2000 },
  { name: 'Threat Intel', value: 2780 },
  { name: 'High severity', value: 1890 },
];

const tableData = [
  { time: 'Aug 18, 2020 @ 09:05:57.682', agentName: 'wazuh-manager', dataAwsSource: 'vpc', ruleDescription: 'AWS Cloudtrail [AMAZON_IAM]: CreateAccessKey error: AccessDenied', ruleLevel: 5, ruleId: 80250 },
  { time: 'Aug 11, 2020 @ 04:31:31.265', agentName: 'wazuh-manager', dataAwsSource: 'guardduty', ruleDescription: 'AWS GuardDuty [NETWORK]: Tor exit node is communicating with ec2 instance', ruleLevel: 6, ruleId: 80302 },
  { time: 'Aug 16, 2020 @ 14:24:08.187', agentName: 'wazuh-manager', dataAwsSource: 'guardduty', ruleDescription: 'AWS GuardDuty: SSH brute force attacks against', ruleLevel: 3, ruleId: 80301 },
  { time: 'Aug 15, 2020 @ 01:27:38.187', agentName: 'wazuh-manager', dataAwsSource: 'guardduty', ruleDescription: 'AWS GuardDuty [API_CALL]: Unusual console login was seen for principal', ruleLevel: 6, ruleId: 80302 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const Page3 = () => {
  return (
    <Container maxWidth="xl">
      {/* Search and filter section */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="search-by-label">Search by</InputLabel>
              <Select labelId="search-by-label" id="search-by" defaultValue="">
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="agent">Agent</MenuItem>
                <MenuItem value="rule">Rule</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Search Keyword" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Start Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="End Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>Search</Button>
          <Button variant="outlined" color="primary">Reset</Button>
        </Box>
      </Box>

      {/* Charts section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Active Alerts (Last 24 hours)
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vpc" stackId="a" fill="#8884d8" />
                <Bar dataKey="guardduty" stackId="a" fill="#82ca9d" />
                <Bar dataKey="inspector" stackId="a" fill="#ffc658" />
                <Bar dataKey="macie" stackId="a" fill="#d88484" />
                <Bar dataKey="cloudtrail" stackId="a" fill="#a4de6c" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Top 5 Alert Categories
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Table section */}
      <Box sx={{ mt: 10 }}> {/* 10 cm (100 px) boşluk ekliyoruz */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Agent Name</TableCell>
                <TableCell>Data AWS Source</TableCell>
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
                  <TableCell>{row.dataAwsSource}</TableCell>
                  <TableCell>{row.ruleDescription}</TableCell>
                  <TableCell>{row.ruleLevel}</TableCell>
                  <TableCell>{row.ruleId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Page3;