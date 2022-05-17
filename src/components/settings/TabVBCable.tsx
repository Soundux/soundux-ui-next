import { CheckIcon, ChevronRightIcon, SkipIcon } from '@primer/octicons-react';
import { Card, Divider, Group, Select, Text } from '@mantine/core';
import GradientButton from '../input/GradientButton';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { availableMicrophonesAtom } from '../../store';

function TabVBCable() {
  const [availableMicrophones] = useAtom(availableMicrophonesAtom);
  const [primaryMicrophone, setPrimaryMicrophone] = useState<string | null>(null);

  return (
    <Card p="lg" radius="lg">
      <Text mb="md" weight={500}>
        VB-Cable (Experimental)
      </Text>
      <Text size="sm">
        Our experimental VB-Cable settings, if you don&apos;t want to configure everything VB-Cable
        related manually, this tab is for you!
      </Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column">
        <Text weight={500}>Current Configuration</Text>
        <Group>
          <Text size="sm">Default Microphone</Text>
          <ChevronRightIcon />
          <Text size="sm" weight="lighter">
            VB-CABLE
          </Text>
        </Group>
      </Group>
      <Divider my="lg" variant="dotted" />
      <Select
        label="Primary Microphone"
        data={availableMicrophones}
        value={primaryMicrophone}
        onChange={setPrimaryMicrophone}
        placeholder="Select a microphone"
        mb="lg"
      />
      <Group spacing="xs" direction="column">
        <GradientButton leftIcon={<SkipIcon />}>Reset configuration</GradientButton>
        <GradientButton leftIcon={<CheckIcon />}>Configure automatically</GradientButton>
      </Group>
    </Card>
  );
}

export default TabVBCable;
