import "../styles/Home.css";
import { Box, Button, Typography } from "@mui/material";
import bgImage from "../assets/images/Home Page Carousel.svg";
import CountDown from "../components/countDown/CountDown";
import { eventDay } from "../DB/eventData";
import description1Img from "../assets/images/runner.png";
import kidMeet from "../assets/images/kids.png";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "75vh", md: "100vh" },

        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "85%", md: "55%" },
          gap: "15px",
          marginTop: "60px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", md: "20px" } }}
        >
          University Of Moratuwa | Sri Lanka
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "35px", md: "60px" },
          }}
        >
          Unleash the <span style={{ color: "#FF754A" }}>Champion</span> in You!
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "14px", md: "20px" }, opacity: 0.9 }}
        >
          Mora Kid Athlete – The Ultimate Track & Field Meet for Rising Stars
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: { xs: "10px", md: "12px" }, opacity: 0.8 }}
        >
          Run, Jump, Throw | Build Your Legacy
        </Typography>
      </Box>

      {/* Count down */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
          height: { xs: "25%", md: "25%" },
          width: "80%",
          gap: { xs: "15px", md: "20px" },
          paddingTop: { xs: "5px", md: "10px" },
          textAlign: "left",
          borderTop: "2px solid rgba(200,200,200,1)",
        }}
      >
        <CountDown date={eventDay.date1} />

        <Button
          sx={{
            backgroundColor: eventDay.isRegistrationOpen ? "#FF754A" : "gray",
            color: "white",
            padding: "10px",
          }}
          disabled={!eventDay.isRegistrationOpen}
          onClick={() => {
            if (eventDay.isRegistrationOpen) {
              window.open(eventDay.formLink, "_blank");
            }
          }}
        >
          Register Now
        </Button>
      </Box>
    </Box>
  );
};

// Cards Section
const Cards = () => {
  return (
    <div className="topic">
      <h1>Explore</h1>
      <div className="cards-container">
        <a
          href="/entry-form"
          className="card"
          style={{
            backgroundImage: "url('./src/assets/images/Entryform.svg')",
          }}
        >
          <h3>Entry Form</h3>
          <p>Closing date: 25-02-2025</p>
        </a>
        <a
          href="/handbook"
          className="card"
          style={{ backgroundImage: "url('./src/assets/images/Handbook.svg')" }}
        >
          <h3>Hand Book</h3>
          <p>Details about MORA KID Athletic meet programs.</p>
        </a>
        <a
          href="/schedule"
          className="card"
          style={{ backgroundImage: "url('./src/assets/images/Schedule.svg')" }}
        >
          <h3>Schedule</h3>
          <p>2-day event. Schedule will be announced soon!</p>
        </a>
      </div>
    </div>
  );
};

// Summary of Mora Kid Meet
const MeetContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "50px",
        }}
      >
        <Box
          component="img"
          src={description1Img}
          sx={{
            width: { xs: "90%", md: "500px" },
            height: { xs: "auto", md: "400px" },
            borderRadius: "15px",
          }}
        ></Box>

        <Box
          sx={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: " #555555",
            width: { xs: "90%", md: "40%" },
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 800,
              color: "rgb(49, 49, 49)",
              marginBottom: "15px",
              
              
            }}
          >
            MORA Kid Athlete
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Welcome to Mora Kid Athlete, the premier all-island JUNIOR
            track & field meet, proudly organized by{" "}
            <span style={{ fontWeight: 600 }}>
              {" "}
              the University of Moratuwa Athletic Team.
            </span>
            This event provides an exciting platform for young athletes from
            across Sri Lanka to showcase their talent, push their limits, and
            take the first step toward a promising athletic future.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            We are dedicated to discovering the next generation of champions by
            fostering a competitive yet supportive environment where young
            athletes can thrive. Through Junior track & field meet, we aim to inspire a
            passion for excellence, teamwork, and sportsmanship in every
            participant. This event is a celebration of determination,
            perseverance, and the drive to succeed.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Stay connected for event updates, motivational success stories, and
            the latest highlights. Join us in building a legacy of athletic
            brilliance that will leave a lasting impact on Sri Lankan sports.
            Let’s come together to shape the future of athletics and empower the
            young stars who will define the next era of champions!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// 2025 Mora Kid Meet
const MeetDetails = () => {
  const handleViewSchedule = () => {
    window.open(eventDay.scheduleLink, "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        marginTop: { xs: "50px", md: "100px" },
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Box
          component="img"
          src={kidMeet}
          sx={{
            width: { xs: "90%", md: "500px" },
            height: "auto",
            borderRadius: "15px",
          }}
        ></Box>

        <Box
          sx={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: " #555555",
            width: { xs: "90%", md: "40%" },
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 800,
              color: "rgb(49, 49, 49)",
              marginBottom: "15px",
            }}
          >
            MORA Kid Athlete 2025!
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            The University of Moratuwa Athletic Team is excited to bring back
            the <strong>JUNIOR Track & Field Meet</strong> for the second time! Get ready for
            two days full of energy, excitement, and unforgettable moments.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "15px", fontWeight: 600 }}
          >
            <span style={{ fontWeight: 800, color: "black" }}>Venue:</span>{" "}
            Diyagama Mahinda Rajapaksha Stadium <br />
            <span style={{ fontWeight: 800, color: "black" }}>Date:</span>{" "}
            {eventDay.date1} - {eventDay.date2} <br />
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            This event is open to all young athletes who love running, jumping,
            and competing in a friendly atmosphere. Let’s inspire the next
            generation of champions!
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "" }}>
            Don’t miss out on the fun! See you on the track!
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "15px" }}>
            <a 
              href={eventDay.rulesLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: "none", color: "#0070FF" }}
            >
              Click here to view the rules and regulation.
            </a>
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "flex-start", xs: "center" },
            }}
          >
            <Button
              sx={{
                backgroundColor: eventDay.isRegistrationOpen
                  ? "#FF754A"
                  : "gray",
                color: "white",
                padding: "10px",
              }}
              disabled={!eventDay.isRegistrationOpen}
              onClick={() => {
                if (eventDay.isRegistrationOpen) {
                  window.open(eventDay.formLink, "_blank");
                }
              }}
            >
              Register Now
            </Button>

            <Button
              sx={{
                marginLeft: "40px",
                // backgroundColor: "black",
                color: "#FF754A",
                fontWeight: "600",
              }}
              onClick={handleViewSchedule}
            >
              View Schedule
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

import partnerImg1 from "../assets/images/Cramp guard plus.svg";
import partnerImg2 from "../assets/images/2025 Parner 2.png";
import partnerImg3 from "../assets/images/Pick_me.svg";
import partnerImg4 from "../assets/images/2025 partner 1.jpg";
import partnerImg5 from "../assets/images/bairaha.jpeg";
import partnerImg6 from "../assets/images/Ncinga.svg";


// Partners Section
const Partners = () => {
  return (
    <div className="partners-container">
      <div className="topic">
        <h1>Our Partners</h1>
        <div className="partners-table">
          <a
            href="https://www.crampguardplus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg1}
              alt="Crampguard Logo"
              className="partner-logo"
            />
          </a>
          <a
            href="https://www.cic.lk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg2}
              alt="e-life Logo"
              className="partner-logo"
            />
          </a>
          <a
            href="https://www.pickme.lk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg3}
              alt="PickMe Logo"
              className="partner-logo" />
          </a>
          <a
            href="http://www.avi.lk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg4}
              alt="AVI Logo"
              className="partner-logo"
            />
          </a>
          <a
            href="https://www.bairaha.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg5}
              alt="Bairaha Logo"
              className="partner-logo"
            />
          </a>
          <a
            href="https://www.partner6.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partnerImg6}
              alt="Partner 6 Logo"
              className="partner-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div>
      <Main />
      {/* <Cards /> */}
      <MeetContent />
      <MeetDetails />
      <Partners />
    </div>
  );
};

export default Home;
