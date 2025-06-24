import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function CountDown({ date }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
      };
    }
    return { days: 0, hours: 0 }; // If the event is happening
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60 * 60); // Updates every hour

    return () => clearInterval(timer);
  }, [date]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "20px", md: "50px" },
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {timeLeft.days === 0 && timeLeft.hours === 0 ? (
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "50px" },
            fontWeight: 700,
            color: "white",
          }}
        >
          🎉 Announced Soon! 🎉
        </Typography>
      ) : (
        <Box sx={{ display: "flex", gap: { xs: "20px", md: "50px" } }}>
          {/* Days */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: 600,
                lineHeight: { xs: "30px", md: "60px" },
              }}
            >
              {timeLeft.days}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: 500 }}
            >
              Days
            </Typography>
          </Box>

          {/* Hours */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: 600,
                lineHeight: { xs: "30px", md: "60px" },
              }}
            >
              {timeLeft.hours}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: 500 }}
            >
              Hours
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CountDown;
