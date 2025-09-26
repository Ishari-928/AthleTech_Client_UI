import { FormControlLabel } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Checkbox, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, TextField
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/fileUpload/FileUpload';
import SuccessModal from '../components/successModel/SuccessModal';
import { registerAthletes } from '../api/athleteService';

const RegistrationSummary = ({ athletes, onAddNewAthlete, onDelete }) => {
    const [checked, setChecked] = useState(athletes.map(() => true));
    const [totalFee, setTotalFee] = useState(0);
    const [paymentFile, setPaymentFile] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({
        paymentFile: '',
        terms: ''
    });
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');


    const navigate = useNavigate();
    

    useEffect(() => {
        const fee = athletes.reduce((acc, athlete, idx) => {
        return checked[idx] ? acc + Number(athlete.registrationFee || 0) : acc;
        }, 0);
        setTotalFee(fee);
    }, [checked, athletes]);

    const handleCheck = (index) => {
        setChecked((prev) =>
        prev.map((item, idx) => (idx === index ? !item : item))
        );
    };

    const handleDelete = () => {
        const toDelete = checked
        .map((isChecked, idx) => (!isChecked ? idx : null))
        .filter((i) => i !== null);
        onDelete(toDelete);
        setChecked((prev) => prev.filter((_, idx) => !toDelete.includes(idx)));
    };

    const handleSubmit = async () => {
        let hasError = false;
        const newErrors = {
            paymentFile: '',
            terms: ''
    };

    if (!paymentFile) {
        newErrors.paymentFile = '* Please upload the payment slip before submitting.';
        hasError = true;
    }

    if (!termsAccepted) {
        newErrors.terms = '* Please agree to the terms and conditions before submitting.';
        hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {
      setLoading(true);
      setApiError('');

      const selectedAthletes = athletes.filter((_, idx) => checked[idx]);

    const invalidAthletes = selectedAthletes.filter(athlete => 
      !athlete.fullName || !athlete.email || !athlete.contact || 
      !athlete.school || !athlete.dob || !athlete.ageGroup || 
      !athlete.events || athlete.events.length === 0
    );

     if (invalidAthletes.length > 0) {
      setApiError("Please make sure all athletes have complete information");
      return;
    }

    // console.log("Selected athletes:", selectedAthletes);
    // console.log("Total fee:", totalFee);
    // console.log("Payment file:", paymentFile);

      await registerAthletes(selectedAthletes, paymentFile, totalFee);

      setOpenSuccessModal(true);

    } catch (error) {
      console.error(error);
      setApiError(error.response?.data?.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }

    };

    return (
        <Box sx={{
            p: 2,
            mt: { xs: 10, sm: 15 },
            width: {
            xs: '100%',   
            sm: '90%',    
            md: '80%'     
            },
            maxWidth: '800px',
            margin: '0 auto', 
        }}>

        <Typography variant="h5" gutterBottom>Registration Summary</Typography>
           

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 2,
                    mb: 2,
                    flexWrap: 'wrap', 
                }}
                                >
                <Button
                    onClick={handleDelete}
                    startIcon={<Delete />}
                    sx={{
                    minWidth: { xs: '100px', sm: '160px' },
                    height: { xs: '30px', sm: '40px' },
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                >
                    Delete
                </Button>

                <Button
                    variant="contained"
                    onClick={onAddNewAthlete}
                    sx={{
                    minWidth: { xs: '80px', sm: '150px' },
                    height: { xs: '30px', sm: '40px' },
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                >
                    + Add new Athlete
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Athlete Name</TableCell>
                    <TableCell>Registered Event</TableCell>
                    <TableCell>Registration Fee (Rs.)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {athletes.map((athlete, index) => (
                    <TableRow key={index}>
                        <TableCell>
                        <Checkbox
                            checked={checked[index]}
                            onChange={() => handleCheck(index)}
                        />
                        </TableCell>
                        <TableCell>{athlete.fullName}</TableCell>
                        <TableCell>{athlete.events.join(', ')}</TableCell>
                        <TableCell>{athlete.registrationFee}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

            <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                Total Registration Fee (Rs.)
                </Typography>
                <TextField
                fullWidth
                value={`Rs. ${totalFee.toFixed(2)}`}
                InputProps={{ readOnly: true }}
                />
            </Box>

            <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>Upload Payment Slip</Typography>

                <FileUpload
                    
                    onFilesSelected={(files) => {
                    if (files.length > 0) {
                        setPaymentFile(files[0]); 
                        setErrors(prev => ({ ...prev, paymentFile: '' }));
                    } else {
                        setPaymentFile(null);
                    }
                    }}
                />

                {errors.paymentFile && (
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {errors.paymentFile}
                    </Typography>
                )}
            </Box>


            <Box mt={2}>
                <FormControlLabel
                control={
                <Checkbox 
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                />}
                label="I agree to the terms and conditions."
                />
                
                {errors.terms && (
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {errors.terms}
                    </Typography>
                )}
            </Box> 
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 5,
                    mt: 4,
                    width: '100%',
                    alignSelf: 'center',

                    minWidth: { xs: '100px', sm: '160px' },
                    height: { xs: '30px', sm: '40px' },
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                }}
                >
                <Button
                    variant="outlined"
                    sx={{
                    py: 1.5,
                    fontSize: '16px',
                    width: '30%',
                    borderColor: '#ff5722',
                    color: '#ff5722',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#ffece6',
                        borderColor: '#f4511e',
                        color: '#f4511e',
                        },
                    minWidth: { xs: '100px', sm: '160px' },
                    height: { xs: '30px', sm: '40px' },
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                    onClick={() => navigate('/home')}
                >
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    sx={{
                    py: 1.5,
                    fontSize: '16px',
                    backgroundColor: '#ff5722',
                    '&:hover': { backgroundColor: '#f4511e' },
                    textTransform: 'none',
                    width: '30%',
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>

            <SuccessModal open={openSuccessModal} onClose={() => setOpenSuccessModal(false)} />

        
        </Box>
    );
};

export default RegistrationSummary;
