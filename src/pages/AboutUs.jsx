import "../styles/AboutUs.css";
import img1 from "../assets/images/AboutUsImages/samod 1.1.jpg";
import img2 from "../assets/images/AboutUsImages/Dulith.jpg";
import img3 from "../assets/images/AboutUsImages/Janith 1.1.jpg";
import img4 from "../assets/images/AboutUsImages/Ishari.jpg";
import img5 from "../assets/images/AboutUsImages/Himesha.jpg";
import img6 from "../assets/images/AboutUsImages/Miththika.jpg";
import img7 from "../assets/images/AboutUsImages/Sanudi.jpg";
import cover from "../assets/images/AboutUsImages/12.jpg";
import PastWinners from "../components/pastWinners/PastWinners";

import { Box, Typography } from "@mui/material";

const committeeMembers = [
  {
    name: "Samodh Dharmaraja",
    phone: "+94 77 677 4768",
    image: img1,
  },
  {
    name: "Dulith Dilshan",
    phone: "+94 76 935 1593",
    image: img2,
  },
  {
    name: "Janith Ravishanka",
    phone: "+94 76 668 1593",
    image: img3,
  },

  {
    name: "Ishari Abeysooriya",
    phone: "+94 71 592 1566",
    image: img4,
  },
  {
    name: "Himesha Kodithuwakku",
    phone: "+94 77 668 6553",
    image: img5,
  },
  {
    name: "Miththika Samarathunga",
    phone: "+94 77 668 6553",
    image: img6,
  },
  {
    name: "Sanudi Perera",
    phone: "+94 76 974 7344",
    image: img7,
  },
];

const description1 =
  "We are the Athletics Team of the University of Moratuwa, a dynamic and passionate group of athletes committed to excellence in sports. With a strong and well-connected team, we strive to uphold the legacy of athleticism and sportsmanship at our university. Our members, including experienced coaches, former champions, and rising stars, work together to create a competitive yet supportive environment. Through dedication, rigorous training, and teamwork, we have built a reputation for excellence, continuously pushing our limits to achieve new heights in athletics.";

const description2 =
  "We are organizing Mora Kid Athlete with a vision to discover and nurture young athletic talent across the country. Our goal is to provide a platform for aspiring athletes to showcase their skills, develop a deep passion for winning, and experience the thrill of competition at the highest level. We believe in empowering young athletes, helping them build resilience, discipline, and sportsmanship. By fostering this spirit, we aim to create a generation of champions who will make a mark in the national and international sports arena. This event is not just about competition—it is about inspiring the youth, connecting communities, and celebrating the future of Sri Lankan athletics.";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Section */}
      {/* <section className="about-section ">
        <div className="about-image">
          <img src={cover} alt="Athlete in starting position" />
        </div>
        <div className="about-content">
          <h2>About us</h2>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </section> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "90%",
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
            // flex: 1,
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

          {/* <Typography sx={{textAlign: "justify"}}>{description1}</Typography> */}
          {/* <Typography sx={{textAlign: "justify"}}>{description2}</Typography> */}
        </Box>
      </Box>

      {/* Organizing Committee Section */}
      {/* <section className="committee-section">
        <h2>Organizing Committee</h2>
        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <div key={index} className="committee-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.phone}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="committee-section">
        <h2>Organizing Committee</h2>
        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <a
              key={index}
              href={`tel:${member.phone}`}
              className="committee-member"
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.phone}</p>
            </a>
          ))}
        </div>
      </section> */}

      <PastWinners />
    </div>
  );
};

export default AboutUs;
