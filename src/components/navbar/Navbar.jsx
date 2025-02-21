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

const pages = [
  { page: "Home", path: "/" },
  { page: "Gallery", path: "/gallery" },
  { page: "About Us", path: "/aboutus" },
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
                key={page}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
