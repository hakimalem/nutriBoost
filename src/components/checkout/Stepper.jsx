import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ComboBox from './ComboBox';
import { wilayas } from '../../data/data';
const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function CustomStepIcon(props) {
  const { active, completed } = props;
  const color = active || completed ? 'green' : 'gray';

  return (
    <div
      className={`flex ${
        active || completed ? 'border-primary' : 'border-gray-500'
      }} justify-center border-[2px] p-2 rounded-full `}
    >
      <div
        className={`${
          active || completed ? 'bg-primary' : 'bg-text-gray'
        } h-4 w-4 rounded-full `}
      ></div>
    </div>
  );
}

export const CustomStepper = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  root;
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step active={true}>
          <StepLabel StepIconComponent={CustomStepIcon}>Customer</StepLabel>
          <StepContent>
            <div className="border flex justify-between px-4 py-6 items-center w-[150%]">
              <div className="flex items-center gap-5 ">
                <img className="w-16" src="./ichouProfile.png" alt="" />
                <p>ichou@esi-sba.dz</p>
              </div>
              <button className="h-full bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Sign out
              </button>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel StepIconComponent={CustomStepIcon}>Shipping</StepLabel>
          <StepContent>
            <div>
              <div>
                <div>
                  <div>
                    <label htmlFor="street">Street address</label>
                    <input id="street" name="street" type="text" className="" />
                  </div>
                </div>
                <ComboBox wilayas={wilayas} />
              </div>
              <button
                onClick={handleNext}
                className="h-full bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Next
              </button>
            </div>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

//  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
//    Back
//  </Button>;