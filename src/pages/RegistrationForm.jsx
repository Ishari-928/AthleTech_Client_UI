import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  MenuItem,
  Select,
  FormGroup,
  FormHelperText
} from '@mui/material';

import Guideline from "../assets/images/RegistrationForm/eventAgeCategory.png"; //F:\Level 3 individual Project\AthleTech_Frontend\athletechfrontend\src\assets\images\RegistrationForm\eventAgeCategory.png

 // Adjust the import path as necessary

const Registration = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    gender: 'male',
    school: '',
    dob: '',
    ageGroup: '',
    events: [],
    registrationFee: 0,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const events = [
    '100M', '200M', '400M', '800M', '1500M',
    'Long Jump', 'Triple Jump', 'High Jump',
    'Discuss Throw', 'Shot Put', 'Javelin Throw'
  ];

  useEffect(() => {
    const eventCount = formData.events.length;
    const fee =
      eventCount === 0
        ? 0
        : eventCount === 1
          ? 800
          : 800 + (eventCount - 1) * 500;

    setFormData((prev) => ({
      ...prev,
      registrationFee: fee,
    }));
  }, [formData.events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

     // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;

    if (checked && formData.events.length >= 3) {
      alert("You can select only up to 3 events.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      events: checked
        ? [...prev.events, value]
        : prev.events.filter((ev) => ev !== value)
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = '*Please enter the athlete name';
    }
    if (!formData.email.trim()) {
      newErrors.email = '*Please enter your email';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = '*Please enter your contact number';
    }
    if (!formData.school.trim()) {
      newErrors.address = '*Please enter your school name';
    }
    if (!formData.dob) {
      newErrors.dob = '*Please select your date of birth';
    }
    if (!formData.ageGroup) {
      newErrors.ageGroup = '*Please select an age group';
    }
    if (formData.events.length === 0) {
      newErrors.events = '*Please select at least one event';
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = '*You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitting formData:", formData);
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 }, mt: { xs: 1, sm: 4, md: 17 } }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginTop: 12,
          color: '#333',
          fontWeight: 700,
          fontSize: { xs: '32px', sm: '36px' },
          mb: 4
        }}
      >
        MORA Kid Athlete 2025 - Meet Registration Form
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1, color: '#333' }}
        >
          <span style={{ color: '#FF5722' }}>MORA</span> KID ATHLETE 2025
        </Typography>

        <Typography sx={{ color: '#555', fontSize: '16px', lineHeight: 1.7 }}>
          The University of Moratuwa athletic team is thrilled to announce
          <strong>"MORA KID ATHLETE"</strong> track and field event for the second time.
          After the success of our inaugural meet, we are excited to bring an even better
          experience this time, with numerous improvements to make it an unforgettable event.
          Scheduled for <strong>1st and 2nd March 2025</strong>, at <strong>Diyagama Stadium</strong>,
          this competition is designed as a special platform for student-athletes of <strong>Under 11 to Under 15</strong>.
          <br />
          The following events will be held in the respective age group categories.
        </Typography>
      </Box>

      <Box
        component="img"
        src= {Guideline} // <-- replace with your image path
        alt="Mora Kid Athlete Banner"
        sx={{
          width: '100%',
          maxWidth: '800px',
          mt: 3,
          mb: 4,
          borderRadius: 2,
          boxShadow: 2,
          display: 'block',
          mx: 'auto',
        }}
      />


      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          borderRadius: 2,
          p: { xs: 2, sm: 4 },
          maxWidth: 900,
          mx: 'auto',
          mb: 10,
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter full name' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'example@gmail.com' },
            { label: 'Contact Number (WhatsApp Number)', name: 'contact', type: 'text', placeholder: '0771234567' }
          ].map((field) => (
            <Box key={field.name} sx={{ mb: 3 }}>
              <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#e0e0e0' },
                    '&:hover fieldset': { borderColor: '#bdbdbd' }
                  }
                }}
              />
            </Box>
          ))}

          {/* Gender */}
          <Box sx={{ mb: 3 }}>
            <FormControl>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                sx={{ flexDirection: 'row', gap: 4 }}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Address */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>School Name</Typography>
            <TextField
              fullWidth
              name="school"
              multiline
              rows={1}
              placeholder="Royal College, Colombo 07"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#bdbdbd' }
                }
              }}
            />
          </Box>

          {/* DOB */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>Date of Birth</Typography>
            <TextField
              fullWidth
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              error={!!errors.dob}
              helperText={errors.dob}
              InputLabelProps={{ shrink: true }}
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#bdbdbd' }
                }
              }}
            />
          </Box>

          {/* Age Group */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>Select The Age Group</Typography>
            <FormControl fullWidth error={!!errors.ageGroup}>
              <Select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                displayEmpty
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#e0e0e0' },
                    '&:hover fieldset': { borderColor: '#bdbdbd' }
                  }
                }}
              >
                <MenuItem value="" disabled>Select Options</MenuItem>
                <MenuItem value="under12">Under 12</MenuItem>
                <MenuItem value="under15">Under 13</MenuItem>
                <MenuItem value="under18">Under 14</MenuItem>
                <MenuItem value="open">Open</MenuItem>
              </Select>
              {errors.ageGroup && <FormHelperText>{errors.ageGroup}</FormHelperText>}
            </FormControl>
          </Box>

          {/* Events */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>Select The Events</Typography>
            <FormControl error={!!errors.events} component="fieldset">
              <FormGroup
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  p: 2,
                  backgroundColor: '#fff',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}
              >
                {events.map((event) => (
                  <FormControlLabel
                    key={event}
                    control={
                      <Checkbox
                        value={event}
                        checked={formData.events.includes(event)}
                        onChange={handleEventChange}
                      />
                    }
                    label={event}
                  />
                ))}
              </FormGroup>
              {errors.events && <FormHelperText>{errors.events}</FormHelperText>}
            </FormControl>
          </Box>

          {/* Registration Fee */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: '#333', mb: 1, fontSize: '15px', fontWeight: 500 }}>Registration Fee (Rs.)</Typography>
            <TextField
              fullWidth
              name="registrationFee"
              value={
                formData.registrationFee
                  ? `Rs. ${formData.registrationFee.toFixed(2)}`
                  : ''
              }
              InputProps={{ readOnly: true }}
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#bdbdbd' }
                }
              }}
            />
          </Box>

          {/* Terms & Conditions */}
          <Box sx={{ mb: 3 }}>
            <FormControl error={!!errors.termsAccepted}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        termsAccepted: e.target.checked
                      }))
                    }
                    name="termsAccepted"
                  />
                }
                label="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used..."
              />
              {errors.termsAccepted && (
                <FormHelperText>{errors.termsAccepted}</FormHelperText>
              )}
            </FormControl>
          </Box>

          {/* Submit Button */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  py: 1.5,
                  backgroundColor: '#ff5722',
                  '&:hover': { backgroundColor: '#f4511e' },
                  textTransform: 'none',
                  fontSize: '16px'
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
