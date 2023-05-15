import { Step, Stepper, StepLabel } from '@material-ui/core';

function CustomStepIcon(props) {
  const { active, completed } = props;
  const color = active || completed ? 'green' : 'gray';

  return (
    <div
      style={{
        backgroundColor: color,
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
      }}
    >
      {props.icon}
    </div>
  );
}

export const MyStepper = () => {
  return (
    <Stepper orientation="vertical">
      <Step>
        <StepLabel StepIconComponent={CustomStepIcon}>Step 1</StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={CustomStepIcon}>Step 2</StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={CustomStepIcon}>Step 3</StepLabel>
      </Step>
    </Stepper>
  );
};
