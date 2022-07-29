import { Alert, Center, Stack, Stepper, Text } from '@mantine/core';
import GradientButton from '../components/input/GradientButton';
import { EyeIcon, PaperAirplaneIcon } from '@primer/octicons-react';
import { useState } from 'react';

function Tutorial() {
  const [active, setActive] = useState(1);

  return (
    <Center
      sx={{
        height: 'calc(100vh - 92px)',
      }}
    >
      <Stack align="center" sx={{ width: '74%', height: '100%' }}>
        <Text weight={500} size="md" mt="auto">
          Welcome to Soundux!
        </Text>
        <Text size="sm" color="#868E96" sx={{ width: '354px', textAlign: 'center' }}>
          We’ve noticed that it’s the first time you started Soundux!
          <br />
          Please read through our tutorial carefully, it will help you understand how Soundux works and
          how to troubleshoot common problems!
        </Text>
        <GradientButton leftIcon={<PaperAirplaneIcon />} mt="lg">
          Start Tutorial
        </GradientButton>
        <GradientButton leftIcon={<EyeIcon />} mb="lg">
          Watch Video Tutorial instead
        </GradientButton>

        <Alert title="Additional steps required" icon={<EyeIcon />} color="red" sx={{ width: '523px' }}>
          We have detected that you are using Windows. <br />
          Soundux requires additional steps to be taken in order to be able to play sounds through your
          microphone.{' '}
          <Text weight="bold" size="sm">
            Please follow the last steps of the tutorial carefully
          </Text>
          or try the experimental automatic-setup!
        </Alert>

        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          sx={{ width: '100%' }}
          mt="auto"
          mb="xl"
        >
          <Stepper.Step label="Usage" description="Learn the Controls" />
          <Stepper.Step label="FAQ" description="What to look out for" />
          <Stepper.Step label="Get started" description="Create your first tab and add sounds" />
          <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
        </Stepper>
      </Stack>
    </Center>
  );
}

export default Tutorial;
