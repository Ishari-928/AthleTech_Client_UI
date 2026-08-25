import React from "react";
import { Box, Typography, Container, Grid, TextField, Button } from "@mui/material";
import bgImage from "../assets/images/Home Page Carousel.svg";

const PageName = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "55vh",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "60px"},
            fontWeight: 800,
            marginTop: "30px",
            
          }}
        >
           Talk to <span style={{ color: "#FF754A" }}>Our Team.</span> 
        </Typography>
      </Box>
    );
};

import img1 from "../assets/images/AboutUsImages/samod 1.1.jpg";
import img2 from "../assets/images/AboutUsImages/Dulith.jpg";
import img3 from "../assets/images/AboutUsImages/Janith 1.1.jpg";
import img4 from "../assets/images/AboutUsImages/Ishari.jpg";

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
];

const ContactForm = () => {
    return (
        <Box component="form" 
            action="https://formsubmit.co/athletech.test@gmail.com" 
            method="POST"
            sx={{
                '& .MuiInputBase-input': {fontFamily: '"Open Sans", sans-serif'},
                '& .MuiFormLabel-root': { fontFamily: '"Open Sans", sans-serif' },
                '& .MuiOutlinedInput-root':
                {
                    '& fieldset': { borderColor: '#ccc', }, 
                    '&:hover fieldset': { borderColor: '#ff5733', }, 
                    '&.Mui-focused fieldset': {borderColor: '#ff5733',}, 
                
                },
                '& .Mui-focused': { color: '#ff5733 !important', },
                '& input::placeholder, & textarea::placeholder': { 
                    color: '#a9a9a9', 
                    opacity: 1, 
                }
            }}>
            
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="display_name" value="Ishari Abeysooriya" />
            <input type="hidden" name="contact_number" value="0715921566" />
            <input type="hidden" name="fixed_message" value="hello" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We will get back to you soon." />
            
            <Grid container spacing={2}>
                {/* First Name & Last Name Row */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        placeholder="John"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Doe"
                        required
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                    />
                </Grid>

                {/* Phone */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        variant="outlined"
                        type="tel"
                        placeholder="+94 71 592 1566"
                        required
                    />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="message"
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="Type your message here..."
                    />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        type="submit"
                        sx={{
                            backgroundColor: "#ff5733", 
                            marginBottom: "20px", 
                            marginTop: "20px", 
                            "&:hover": {
                                backgroundColor: "#cc4627", 
                            },
                        }}             
                    >
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

const ContactN = () => {
    return (
        <div className="contact-us">
            
            <PageName />        
            <section className="committee-section">
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
            </section>

            
            <Container maxWidth="1100">
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "0 auto", 
                    }}
                >
                <Grid container spacing={4} alignItems="center" sx={{ mt:2, mb: 6 ,  maxWidth: "1100px" }} >
                    <Grid item xs={12} md={6} sx={{ mt: -5 }}>
                        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                            Let's talk with us
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
                            Have any questions or need more information? Feel free to contact us, and our team will be happy to assist you.
                        </Typography>
                        <Typography variant="body1">
                            <strong>MORA KID Athlete</strong> 
                        </Typography>
                        <Typography variant="body1">
                            <strong>Department of Physical Education</strong> 
                        </Typography>
                        <Typography variant="body1">
                                <strong>University of Moratuwa</strong> 
                        </Typography>
                        <Typography variant="body1">
                            <strong>Moratuwa</strong> 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>
                    </Grid>
                    </Box>
                </Container>

            
        </div>
    );
};

export default ContactN;