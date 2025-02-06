import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from "./components/Dashboard";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";  // Page6 bileşenini içeri aktarıyoruz
import "./App.css";

// Tema oluşturma ve AppBar'ın rengini ayarlama
const theme = createTheme({
  palette: {
    primary: {
      main: '#1c0f45' // Gri renk
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar position="static" className="navbar">
            <Toolbar style={{ height: '100%' }}>
              <Button color="inherit" component={Link} to="/">Dashboard</Button>
              <Button color="inherit" component={Link} to="/page1">Page1</Button>
              <Button color="inherit" component={Link} to="/page2">Page2</Button>
              <Button color="inherit" component={Link} to="/page3">Page3</Button>
              <Button color="inherit" component={Link} to="/page4">Page4</Button>
              <Button color="inherit" component={Link} to="/page5">Page5</Button>
              <Button color="inherit" component={Link} to="/page6">Page6</Button> {/* Page6 navigasyon butonunu ekliyoruz */}
            </Toolbar>
          </AppBar>

          <Container className="container" maxWidth="lg">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
              <Route path="/page6" element={<Page6 />} /> {/* Page6 rota tanımını ekliyoruz */}
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;