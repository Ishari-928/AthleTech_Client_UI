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

const SemiFinalResults = () => {
  // Set default selected values
  const [ageGroup, setAgeGroup] = useState('Under 15');
  const [event, setEvent] = useState('100M');
  const [gender, setGender] = useState('Boys');
  const [year, setYear] = useState('2025');

  //  Dropdown options
  const ageOptions = ['Under 12', 'Under 13', 'Under 14', 'Under 15', 'Open'];
  const eventOptions = ['100M', '200M', '400M', '8000M', '1500M'];
  const genderOptions = ['Boys', 'Girls'];
  const yearOptions = ['2025', '2024', '2023'];

  // Dummy heat results (simulate multiple heats)
  const dummyData = [
    {
      heatNo: 1,
      ageGroup: 'Under 15',
      event: '100M',
      gender: 'Boys',
      year: '2025',
      athletes: [
        { bib: 101, name: 'Minula Nethul', school: 'Royal College', performance: '14.01', qualified: 'Yes' },
        { bib: 102, name: 'Kavindu Prasanna', school: 'Ananda College', performance: '14.20', qualified: 'No' },
      ],
    },
    {
      heatNo: 2,
      ageGroup: 'Under 15',
      event: '100M',
      gender: 'Boys',
      year: '2025',
      athletes: [
        { bib: 201, name: 'Shehan Perera', school: 'St. Joseph\'s', performance: '13.95', qualified: 'Yes' },
        { bib: 202, name: 'Danidu Ruwan', school: 'Nalanda College', performance: '14.25', qualified: 'No' },
        { bib: 203, name: 'Binura Jayasundara', school: 'DS Senanayake', performance: '14.50', qualified: 'No' },
      ],
    },
    {
      heatNo: 1,
      ageGroup: 'Under 13',
      event: '200M',
      gender: 'Girls',
      year: '2024',
      athletes: [
        { bib: 301, name: 'Sewmini Dilshani', school: 'Musaeus College', performance: '31.05', qualified: 'Yes' },
      ],
    },
  ];

  // ✅ Filter data based on current selections
  const filteredHeats = dummyData.filter(
    heat =>
      heat.ageGroup === ageGroup &&
      heat.event === event &&
      heat.gender === gender &&
      heat.year === year
  );

  return (
      <Box sx={{
          px: 2,
          py: 2,
          mt: { xs: 5, sm: 5, md: 15 },
          width: '70%',
          margin: 'auto',
      }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Find Your Semi Final Results
      </Typography>

      {/* Dropdowns */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 , mt: 3 }}>
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

      {/* Display selected filters */}
      {filteredHeats.length > 0 && (
        <Box textAlign="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">MORA KID Athlete - {year}</Typography>
          <Typography variant="subtitle1">{ageGroup} - {event}</Typography>
          <Typography variant="subtitle2" mb={2}>Semi Finals Results</Typography>
        </Box>
      )}

      {/* Dynamic Heats */}
      {filteredHeats.length > 0 ? (
        filteredHeats.map((heat, index) => (
          <Box key={index} mb={4}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Heat {heat.heatNo < 10 ? `0${heat.heatNo}` : heat.heatNo}
            </Typography>
            <Paper elevation={3}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell><b>BIB No</b></TableCell>
                    <TableCell><b>Athlete Name</b></TableCell>
                    <TableCell><b>School</b></TableCell>
                    <TableCell><b>Performance</b></TableCell>
                    <TableCell><b>Qualified</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {heat.athletes.map((athlete, i) => (
                    <TableRow key={i}>
                      <TableCell>{athlete.bib}</TableCell>
                      <TableCell>{athlete.name}</TableCell>
                      <TableCell>{athlete.school}</TableCell>
                      <TableCell>{athlete.performance}</TableCell>
                      <TableCell>{athlete.qualified}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Box>
        ))
      ) : (
        <Typography align="center" mt={4} color="text.secondary">
          No results found for the selected filters.
        </Typography>
      )}

      {/* Download Button */}
      <Box textAlign="center" mt={5}>
        <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4, mb: 4 }}>
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default SemiFinalResults;



