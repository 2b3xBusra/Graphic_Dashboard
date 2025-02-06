import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: '2020-08-13', vpc: 4000, guardduty: 2400, inspector: 2400, macie: 2400, cloudtrail: 2400 },
  { name: '2020-08-14', vpc: 3000, guardduty: 1398, inspector: 2210, macie: 2210, cloudtrail: 2210 },
  { name: '2020-08-15', vpc: 2000, guardduty: 9800, inspector: 2290, macie: 2290, cloudtrail: 2290 },
  { name: '2020-08-16', vpc: 2780, guardduty: 3908, inspector: 2000, macie: 2000, cloudtrail: 2000 },
  { name: '2020-08-17', vpc: 1890, guardduty: 4800, inspector: 2181, macie: 2181, cloudtrail: 2181 },
];

const pieData = [
  { name: 'vpc', value: 4000 },
  { name: 'cloudtrail', value: 3000 },
  { name: 'macie', value: 2000 },
  { name: 'guardduty', value: 2780 },
  { name: 'inspector', value: 1890 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const Page2 = () => {
  return (
      <Container maxWidth="xl">
        <Box my={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper style={{ padding: '20px', height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Events by source over time
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="vpc" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="guardduty" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="inspector" stroke="#ffc658" />
                    <Line type="monotone" dataKey="macie" stroke="#d88484" />
                    <Line type="monotone" dataKey="cloudtrail" stroke="#a4de6c" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper style={{ padding: '20px', height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Sources
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
        </Box>
        <Container maxWidth="xl" style={{ marginTop: '100px' }}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Events
            </Typography>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>agent.name</th>
                  <th>data.aws.source</th>
                  <th>rule.description</th>
                  <th>rule.level</th>
                  <th>rule.id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aug 18, 2020 @ 09:05:57.682</td>
                  <td>wazuh-manager-master</td>
                  <td>vpc</td>
                  <td>AWS Cloudtrail [AMAZON_IAM]: CreateAccessKey error: AccessDenied</td>
                  <td>5</td>
                  <td>80250</td>
                </tr>
                <tr>
                  <td>Aug 11, 2020 @ 04:31:31.265</td>
                  <td>wazuh-manager-master</td>
                  <td>guardduty</td>
                  <td>AWS GuardDuty [NETWORK]: Tor exit node is communicating with ec2 instance</td>
                  <td>6</td>
                  <td>80302</td>
                </tr>
                <tr>
                  <td>Aug 16, 2020 @ 14:24:08.187</td>
                  <td>wazuh-manager-master</td>
                  <td>guardduty</td>
                  <td>AWS GuardDuty: SSH brute force attacks against</td>
                  <td>3</td>
                  <td>80301</td>
                </tr>
                <tr>
                  <td>Aug 15, 2020 @ 01:27:38.187</td>
                  <td>wazuh-manager-master</td>
                  <td>guardduty</td>
                  <td>AWS GuardDuty [API_CALL]: Unusual console login was seen for principal</td>
                  <td>6</td>
                  <td>80302</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Container>
      </Container>
  );
};

export default Page2;