import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import uniLogo from "../../assets/images/uniLogo.png";
import temLogo from "../../assets/images/Athletic logo white.png"
import eventLogo from "../../assets/images/eventLogo.png";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const pages = [
  { page: "Home", path: "/" },
  { page: "Gallery", path: "/gallery" },
  { page: "About Us", path: "/aboutus" },
  { page: "News", path: "/news" },
  { page: "Coaches Details", path: "/coaches-details" },
  { page: "Contact Us", path: "/contact" },
  
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  //nested drop down
  const [anchorElResults, setAnchorElResults] = React.useState(null);
  const [anchorElPast, setAnchorElPast] = React.useState(null);

  const handleResultsMenuOpen = (event) => {
    setAnchorElResults(event.currentTarget);
  };

  const handlePastMenuOpen = (event) => {
    setAnchorElPast(event.currentTarget);
  };

  const handleCloseResultsMenu = () => {
    setAnchorElResults(null);
  };

  const handleClosePastMenu = () => {
    setAnchorElPast(null);
  };

  const openPDF = (url) => {
    window.open(url, "_blank");
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#101524" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={uniLogo}
            alt="University Logo"
            sx={{ width: { xs: 40, md: 50 }, height: "auto" }}
          />
          <Box
            component="img"
            src={temLogo}
            alt="University Logo"
            sx={{
              width: { xs: 70, md: 110 },
              height: "auto",
              marginLeft: "10px"
            }}
          />
          <Box
            component="img"
            src={eventLogo}
            alt="University Logo"
            sx={{
              width: { xs: 70, md: 110 },
              height: "auto",
              marginLeft: "10px",
            }}
          />

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Align pages to the right */}
          <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "12px",
                }}
              >
                {page.page}
              </Button>
            ))}
          </Box>


          {/*  Live Results Dropdown */}
          <Button
            onClick={handleResultsMenuOpen}
            sx={{ my: 2, color: "#FF5722", fontSize: "12px" }}
            endIcon={<ArrowDropDownIcon />}
          >
            Live Results
          </Button>


          <Menu
            anchorEl={anchorElResults}
            open={Boolean(anchorElResults)}
            onClose={handleCloseResultsMenu}

            PaperProps={{
              sx: {
                backgroundColor: "#101524", 
                color: "white",
              },
            }}
          >
            <MenuItem onClick={() => { handleCloseResultsMenu(); navigate("/heat-results"); }}>
              Heat Results
            </MenuItem>
            <MenuItem onClick={() => { handleCloseResultsMenu(); navigate("/semi-final-results"); }}>
              Semi Finals Results
            </MenuItem>
            <MenuItem onClick={() => { handleCloseResultsMenu(); navigate("/final-results"); }}>
              Final Results
            </MenuItem>
            <MenuItem onClick={handlePastMenuOpen}>
              Past Year Results
            </MenuItem>
          </Menu>

          {/* Past Year Sub-Menu */}
          <Menu
            anchorEl={anchorElPast}
            open={Boolean(anchorElPast)}
            onClose={handleClosePastMenu}
          >
            <MenuItem onClick={() => openPDF("https://drive.google.com/file/d/1ziV6zcPQeZVk8b2kdbzQtSuAgkGNevHT/view?usp=drive_link")}>
              2025 Results
            </MenuItem>
            <MenuItem onClick={() => openPDF("https://drive.google.com/file/d/1ziV6zcPQeZVk8b2kdbzQtSuAgkGNevHT/view?usp=drive_link")}>
              2024 Results
            </MenuItem>
            <MenuItem onClick={() => openPDF("https://drive.google.com/file/d/1ziV6zcPQeZVk8b2kdbzQtSuAgkGNevHT/view?usp=drive_link")}>
              2023 Results
            </MenuItem>
          </Menu> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
