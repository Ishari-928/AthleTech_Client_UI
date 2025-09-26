import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Button,
} from '@mui/material';

const FinalResults = () => {
  const [ageGroup, setAgeGroup] = useState('Under 15');
  const [event, setEvent] = useState('100M');
  const [gender, setGender] = useState('Boys');
  const [year, setYear] = useState('2025');

  const ageOptions = ['Under 12', 'Under 13', 'Under 14', 'Under 15', 'Open'];
  const eventOptions = ['100M', '200M', '400M', '8000M', '1500M', 'Long Jump', 'High Jump', 'Shot Put', 'Discus Throw', 'Javelin Throw'];
  const genderOptions = ['Boys', 'Girls'];
  const yearOptions = ['2025', '2024', '2023'];

  const fieldEvents = ['Long Jump', 'High Jump', 'Shot Put', 'Discus Throw', 'Javelin Throw'];

  const finalResultsData = [
    {
      ageGroup: 'Under 15',
      event: '100M',
      gender: 'Boys',
      year: '2025',
      athletes: [
        { bib: 101, name: 'Minula Nethul', school: 'Royal College', performance: '13.80', qualified: '1st Place' },
        { bib: 102, name: 'Shehan Perera', school: 'St. Joseph\'s', performance: '14.00', qualified: '2nd Place' },
        { bib: 103, name: 'Kavindu Prasanna', school: 'Ananda College', performance: '14.20', qualified: '3rd Place' },
      ],
    },
    {
      ageGroup: 'Under 14',
      event: 'Long Jump',
      gender: 'Girls',
      year: '2025',
      athletes: [
        {
          bib: 201,
          name: 'Sewmini Dilshani',
          school: 'Musaeus College',
          attempts: ['4.50', '4.65', '-', '4.70', '-', '4.60'],
          best: '4.70',
          place: '1st Place'
        },
        {
          bib: 202,
          name: 'Nuwani Madushika',
          school: 'Visakha Vidyalaya',
          attempts: ['4.30', '4.50', '4.55', '-', '-', '-'],
          best: '4.55',
          place: '2nd Place'
        },
      ],
    }
  ];

  const filteredFinal = finalResultsData.find(
    final =>
      final.ageGroup === ageGroup &&
      final.event === event &&
      final.gender === gender &&
      final.year === year
  );

  if (filteredFinal && fieldEvents.includes(event)) {
    const placeOrder = ['1st Place', '2nd Place', '3rd Place'];
    filteredFinal.athletes.sort((a, b) => {
      return placeOrder.indexOf(a.place) - placeOrder.indexOf(b.place);
    });
  }

  return (
    <Box sx={{
      px: 2,
      py: 2,
      mt: { xs: 5, sm: 5, md: 15 },
      width: '70%',
      margin: 'auto',
    }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Find Your Final Results
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4, mt: 3 }}>
        {[{ label: 'Age Group', value: ageGroup, set: setAgeGroup, options: ageOptions },
          { label: 'Event', value: event, set: setEvent, options: eventOptions },
          { label: 'Gender', value: gender, set: setGender, options: genderOptions },
          { label: 'Year', value: year, set: setYear, options: yearOptions }
        ].map(({ label, value, set, options }) => (
          <Grid item xs={12} sm={6} md={3} key={label}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>{label}</InputLabel>
              <Select value={value} onChange={(e) => set(e.target.value)} label={label}>
                {options.map(opt => (
                  <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {filteredFinal && (
        <Box textAlign="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">MORA KID Athlete - {year}</Typography>
          <Typography variant="subtitle1">{ageGroup} - {event}</Typography>
          <Typography variant="subtitle2" mb={2}>Final Results</Typography>
        </Box>
      )}

      {filteredFinal ? (
        <Paper elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><b>BIB No</b></TableCell>
                <TableCell><b>Athlete Name</b></TableCell>
                <TableCell><b>School</b></TableCell>
                {fieldEvents.includes(event) ? (
                  <>
                    <TableCell><b>1st Attempt</b></TableCell>
                    <TableCell><b>2nd Attempt</b></TableCell>
                    <TableCell><b>3rd Attempt</b></TableCell>
                    <TableCell><b>4th Attempt</b></TableCell>
                    <TableCell><b>5th Attempt</b></TableCell>
                    <TableCell><b>6th Attempt</b></TableCell>
                    <TableCell><b>Best Performance</b></TableCell>
                    <TableCell><b>Place</b></TableCell>
                  </>
                ) : (
                  <>
                    <TableCell><b>Performance</b></TableCell>
                    <TableCell><b>Place</b></TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFinal.athletes.map((athlete, index) => (
                <TableRow key={index}>
                  <TableCell>{athlete.bib}</TableCell>
                  <TableCell>{athlete.name}</TableCell>
                  <TableCell>{athlete.school}</TableCell>
                  {fieldEvents.includes(event) ? (
                    <>
                      {athlete.attempts.map((attempt, i) => (
                        <TableCell key={i}>{attempt}</TableCell>
                      ))}
                      <TableCell>{athlete.best}</TableCell>
                      <TableCell>{athlete.place}</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{athlete.performance}</TableCell>
                      <TableCell>{athlete.qualified}</TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Typography align="center" mt={4} color="text.secondary">
          No final results found for the selected filters.
        </Typography>
      )}

      <Box textAlign="center" mt={5}>
        <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4, mb: 4 }}>
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default FinalResults;
