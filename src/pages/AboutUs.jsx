import "../styles/AboutUs.css";
import cover from "../assets/images/AboutUsImages/12.jpg";
import PastWinners from "../components/pastWinners/PastWinners";

import { Box, Typography } from "@mui/material";

const description1 =
  "We are the Athletics Team of the University of Moratuwa, a dynamic and passionate group of athletes committed to excellence in sports. With a strong and well-connected team, we strive to uphold the legacy of athleticism and sportsmanship at our university. Our members, including experienced coaches, former champions, and rising stars, work together to create a competitive yet supportive environment. Through dedication, rigorous training, and teamwork, we have built a reputation for excellence, continuously pushing our limits to achieve new heights in athletics.";

const description2 =
  "We are organizing Mora Kid Athlete with a vision to discover and nurture young athletic talent across the country. Our goal is to provide a platform for aspiring athletes to showcase their skills, develop a deep passion for winning, and experience the thrill of competition at the highest level. We believe in empowering young athletes, helping them build resilience, discipline, and sportsmanship. By fostering this spirit, we aim to create a generation of champions who will make a mark in the national and international sports arena. This event is not just about competition—it is about inspiring the youth, connecting communities, and celebrating the future of Sri Lankan athletics.";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: { md: "620px" },
          justifyContent: "center",
          margin: "0 auto",                       
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            src={cover}
            alt="Athlete in starting position"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: { xs: 2, md: 1.5 },
            flexDirection: "column",
            background: "#1e293b",
            padding: "30px",
            color: "white",
            gap: "15px",
            fontSize: { xs: "16px", sm: "12px", md: "16px" },
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>About us</Typography>
          <Typography 
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px" }, 
              textAlign: "justify"
            }}
          >
            {description1}
          </Typography>

          <Typography 
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px" }, 
              textAlign: "justify"
            }}
          >
            {description2}
          </Typography>

        </Box>
      </Box>

      <PastWinners />
    </div>
  );
};

export default AboutUs;
