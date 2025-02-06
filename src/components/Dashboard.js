import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area, ScatterChart, Scatter, ResponsiveContainer
} from "recharts";
import "../App.css";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const barData = [
  { name: '2016', Sales: 40 },
  { name: '2018', Sales: 30 },
  { name: '2020', Sales: 50 },
];

const stackedBarData = [
  { name: 'A', Potatoes: 100, Tomatoes: 40 },
  { name: 'B', Potatoes: 200, Tomatoes: 50 },
  { name: 'C', Potatoes: 300, Tomatoes: 60 },
];

const lineData = [
  { name: '1', Phones: 10, Tablets: 20, PCs: 10, TVs: 40, Speakers: 30 },
  { name: '2', Phones: 30, Tablets: 10, PCs: 20, TVs: 50, Speakers: 20 },
  { name: '3', Phones: 20, Tablets: 30, PCs: 30, TVs: 60, Speakers: 10 },
  { name: '4', Phones: 50, Tablets: 60, PCs: 40, TVs: 10, Speakers: 20 },
];

const areaData = [
  {name: '1', Apples: 100, Oranges: 200, Bananas: 50},
  {name: '2', Apples: 200, Oranges: 100, Bananas: 100},
  {name: '3', Apples: 100, Oranges: 300, Bananas: 150},
  {name: '4', Apples: 300, Oranges: 200, Bananas: 200},
];

const scatterData = [
  {x: 10, y: 20}, {x: 20, y: 40}, {x: 30, y: 50}, {x: 40, y: 60},
  {x: 50, y: 80}, {x: 60, y: 100}, {x: 70, y: 110}
];

const singleStatData = {
  bigValue: "450,511T",
  smallValue: "450,510,967,643,589,000"
};

const secondStatValue = 671;

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#4caf50", "#f44336"];

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Demo Dashboard</h1>
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Bar Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Stacked Bar Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Stacked Bar Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={stackedBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Potatoes" stackId="a" fill="#8884d8" />
                <Bar dataKey="Tomatoes" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Column Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Column Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Stacked Column Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Stacked Column Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={stackedBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Potatoes" stackId="a" fill="#8884d8" />
                <Bar dataKey="Tomatoes" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Pie Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Line Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {["Phones", "Tablets", "PCs", "TVs", "Speakers"].map((key, index) => (
                  <Line key={key} type="monotone" dataKey={key} stroke={colors[index % colors.length]} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Area Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Area Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Apples" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="Oranges" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="Bananas" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Scatter Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Scatter Chart</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis dataKey="x" type="number" name="X Axis" />
                <YAxis dataKey="y" type="number" name="Y Axis" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={scatterData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Statistics - Large Value */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Stat</Typography>
            <Typography variant="h3" align="center">{singleStatData.bigValue}</Typography>
            <Typography variant="subtitle1" align="center">{singleStatData.smallValue}</Typography>
          </Paper>
        </Grid>

        {/* Statistics - Small Value */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "1rem", height: "calc(100% - 2rem)" }}>
            <Typography variant="h6" align="center">Stat</Typography>
            <Typography variant="h3" align="center">{secondStatValue}</Typography>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Dashboard;