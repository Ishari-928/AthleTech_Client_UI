import React, { useState } from 'react';
import Registration from '../../pages/RegistrationForm';
import RegistrationSummary from '../../pages/RegistrationSummary';


const MultiStepForm = () => {
  const [athletes, setAthletes] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

    const handleAddAthlete = (data) => {
    console.log("Received in MultiStepForm:", data);
    setAthletes([...athletes, data]); // add athlete
    setCurrentStep(2); // go to summary
  };

  const handleAddNewAthlete = () => {
    setCurrentStep(1);
  };

  const handleDeleteSelected = (selectedIndexes) => {
    const filtered = athletes.filter((_, idx) => !selectedIndexes.includes(idx));
    setAthletes(filtered);
  };

  return (
    <>
      {currentStep === 1 && (
        <Registration onSubmit={handleAddAthlete} />
      )}
      {currentStep === 2 && (
        <RegistrationSummary
          athletes={athletes}
          onAddNewAthlete={handleAddNewAthlete}
          onDelete={handleDeleteSelected}
        />
      )}
    </>
  );
};

export default MultiStepForm;
